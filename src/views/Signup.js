import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Redirect } from "react-router";

import HeadingOne from "../components/Headings/HeadingOne";
import Input from "components/Inputs/Input/Input";
import Label from "components/Label/Label";
import Button from "components/Button/Button";
import MainTemplate from "../templates/MainTemplate";
import Error from "../components/Error/Error";
import {API_URL} from "../actions/action";


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
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled(HeadingOne)`
  font-size: 5.5rem;
`;

const Signup = () => {
  const [isSignupSuccess, setSignupSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value
    const name = e.target.name.value
    const lastname = e.target.lastname.value
    try {
      const result = await axios.post(API_URL + "/signup", {
        email,
        password,
        confirmPassword,
        name,
        lastname
      });
      if (result.data.success) {
        setSignupSuccess(true);
      }

    } catch (err) {
      if(err.response.status === 422){
        setErrorMessage(err.response.data.message)
      } else {
        setErrorMessage("Server problem.")
      }
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
              <HeadingOne color="#000">Sign in to Lifestealer</HeadingOne>
              {errorMessage && <Error message={errorMessage}/>}
              <Form onSubmit={onSubmit}>
                <Label htmlFor="email">Email</Label>
                <Input placeholder="your@email.com" name="email" id="email" type="email"/>
                <Label htmlFor="name">Name</Label>
                <Input placeholder="Chuck" name="name" id="name" type="text"/>
                <Label htmlFor="lastname">Last name</Label>
                <Input placeholder="Norris" name="lastname" id="lastname" type="text"/>
                <Label htmlFor="password">Password</Label>
                <Input placeholder="Just not 1234" name="password" id="password" type="password"/>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input placeholder="Repeat your password" name="confirmPassword" id="confirmPassword" type="password"/>
                <Button type="submit" >
                  Sign up
                </Button>
              </Form>
            </FormWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

Signup.propTypes = {};

export default Signup;