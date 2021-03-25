import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Redirect } from "react-router";

import { Form, Field } from "react-final-form";

import HeadingOne from "../components/Headings/HeadingOne";
import Input from "components/Inputs/Input/Input";
import Label from "components/Label/Label";
import Button from "components/Button/Button";
import MainTemplate from "../templates/MainTemplate";


const Wrapper = styled.div`
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
  margin: 0 0 50px 0;

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
  margin: 20px 0;
  text-align: center;
`;

const StyledHeading = styled(HeadingOne)`
  font-size: 5.5rem;
`;

const Signup = () => {
  const [isSignupSuccess, setSignupSuccess] = useState(false);

  const onSubmit = async (values) => {
    try {
      const result = await axios.post(process.env.REACT_APP_API_URL + "/signup", {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        name: values.name,
        lastname: values.lastname
      });
      if (result.data.success) {
        setSignupSuccess(true);
      }

    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  if (isSignupSuccess) {
    return <Redirect to="/login" />;
  }
  return (
    <MainTemplate>
      <Wrapper>
        <StyledHeading>Let Lifestealer to steal your life!</StyledHeading>
        <FormWrapper>
          <HeadingOne color="#000">Sign up to Lifestealer</HeadingOne>
          <StyledForm
            onSubmit={onSubmit}
            validate={() => {
              // values between parenthesis
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
                      <Input {...input} type="email" placeholder="your@email.com" />
                      {(meta.error || meta.submitError) && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                      )}
                    </StyledInputWrapper>
                  )}
                </Field>
                <Field name="name">
                  {({ input, meta }) => (
                    <StyledInputWrapper>
                      <Label>Your name</Label>
                      <Input {...input} type="text" placeholder="Joe" />
                      {(meta.error || meta.submitError) && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                      )}
                    </StyledInputWrapper>
                  )}
                </Field>
                <Field name="lastname">
                  {({ input, meta }) => (
                    <StyledInputWrapper>
                      <Label>Your last name</Label>
                      <Input {...input} type="text" placeholder="Doe" />
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
                      <Input {...input} type="password" placeholder="Please not 1234" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </StyledInputWrapper>
                  )}
                </Field>
                <Field name="confirmPassword">
                  {({ input, meta }) => (
                    <StyledInputWrapper>
                      <Label>Confirm Password</Label>
                      <Input {...input} type="password" placeholder="Repeat password" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </StyledInputWrapper>
                  )}
                </Field>
                {submitError && <div className="error">{submitError}</div>}
                <ButtonWrapper>
                  <Button type="submit" disabled={submitting}>
                    Create account
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

Signup.propTypes = {};

export default Signup;