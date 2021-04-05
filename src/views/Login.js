import React, {useState} from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import axios from "axios";
import { loginUser, API_URL } from "actions/action";

import HeadingOne from "../components/Headings/HeadingOne";
import Input from "components/Inputs/Input/Input";
import Label from "components/Label/Label";
import Button from "components/Button/Button";
import MainTemplate from "../templates/MainTemplate";
import Error from 'components/Error/Error'


const Wrapper = styled.div`
  height: calc(100vh - 91px);
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
  align-items: center;
  flex-direction: column;

`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Login = ({ isLoggedIn, login }) => {
  const [errorMessage, setErrorMessage] = useState("")
  const onSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    try {
      await axios.post(API_URL + "/login", {
        email,
        password
      }, { withCredentials: true });
      login()

    } catch (err) {
      if(err.response && err.response.status === 404){
        setErrorMessage("Invalid credentials")
      } else {
        setErrorMessage("Server error.")
      }
    }

  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <MainTemplate cookies={{}}>
      <Wrapper>
        <FormWrapper>
          <HeadingOne color="#000">Sign in to Lifestealer</HeadingOne>
            {errorMessage && <Error message={errorMessage}/>}
              <Form onSubmit={onSubmit}>
                <Label htmlFor="email">Email</Label>
                <Input placeholder="your@email.com" name="email" id="email" type="email"/>
                <Label htmlFor="password">Password</Label>
                <Input placeholder="super_duper_strong_password" name="password" id="password" type="password"/>
                  <Button type="submit" >
                    Log In
                  </Button>
              </Form>
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
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);