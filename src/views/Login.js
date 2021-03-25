import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import axios from "axios";
import { loginUser } from "actions/action";


import { Form, Field } from "react-final-form";

import HeadingOne from "../components/Headings/HeadingOne";
import Input from "components/Inputs/Input/Input";
import Label from "components/Label/Label";
import Button from "components/Button/Button";
import MainTemplate from "../templates/MainTemplate";


const Wrapper = styled.div`
  height: calc(100vh - 93px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
const FormWrapper = styled.div`
  width: 40%;
  min-width: 600px;
  height: 75%;
  border: 4px solid ${({ theme }) => theme.primary};
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;

`;
const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
`;
const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ButtonWrapper = styled.div`
  margin: 7.5% 0;
  text-align: center;
`;
const Login = ({ isLoggedIn, login }) => {
  const onSubmit = async ({ email, password }) => {
    try {
      const result = await axios.post(process.env.REACT_APP_API_URL + "/login", {
        email,
        password
      }, { withCredentials: true });
      login()

    } catch (err) {
      console.log(err.res);
    }

  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <MainTemplate >
      <Wrapper>
        <FormWrapper>
          <HeadingOne color="#000">Sign in to Lifestealer</HeadingOne>
          <StyledForm
            onSubmit={onSubmit}
            validate={() => {
              // const errors = {};
              //   if (!values.username) {
              //     errors.username = 'Required'
              //   }
              //   if (!values.password) {
              //     errors.password = 'Required'
              //   }
              //   return errors
            }}
            render={({
                       submitError,
                       handleSubmit,
                       // form,
                       submitting
                       // pristine,
                       // values
                     }) => (
              <form onSubmit={handleSubmit}>
                <Field name="email">
                  {({ input, meta }) => (
                    <StyledInputWrapper>
                      <Label>Email</Label>
                      <Input {...input} type="text" placeholder="your@email.com" />
                      {(meta.error || meta.submitError) && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                      )}
                    </StyledInputWrapper>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <StyledInputWrapper>
                      <Label>Password</Label>
                      <Input {...input} type="password" placeholder="Password" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </StyledInputWrapper>
                  )}
                </Field>
                {submitError && <div className="error">{submitError}</div>}
                <ButtonWrapper>
                  <Button type="submit" disabled={submitting}>
                    Log In
                  </Button>
                </ButtonWrapper>
              </form>
            )}
          />
        </FormWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

const mapStateToProps = (state) => {
  const { isLoggedIn } = state;
  return { isLoggedIn };
};

const mapDispatchToProps = dispatch => ({
  login:() => dispatch(loginUser())
})
Login.propTypes = {};

export default connect(mapStateToProps,mapDispatchToProps)(Login);