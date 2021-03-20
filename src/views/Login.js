import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'


import { render } from 'react-dom'

import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'

import { theme } from "../theme/theme";
import HeadingOne from "../components/Headings/HeadingOne";
import Input from 'components/Input/Input'
import Label from 'components/Label/Label'
import Button from 'components/Button/Button'


const Wrapper = styled.div`
  height: calc(100vh - 93px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`
const FormWrapper = styled.div`
  width: 40%;
  min-width: 600px;
  height: 75%;
  border: 4px solid ${({ theme }) => theme.primary};
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
  
`
const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
`
const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const ButtonWrapper = styled.div`
  margin: 72.5px 0;
  text-align: center;
`
const Login = () => {

  const onSubmit = (values) => {
    console.log(values.username)
    console.log(values.password)
  }
  return (
    <Wrapper>
      <FormWrapper>
        <HeadingOne color="#000">Sign in to Lifestealer</HeadingOne>
        <StyledForm
          onSubmit={onSubmit}
          validate={values => {
            const errors = {}
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
                     form,
                     submitting,
                     pristine,
                     values
                   }) => (
            <form onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <StyledInputWrapper>
                    <Label>Username</Label>
                    <Input {...input} type="text" placeholder="Username" />
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
)}

Login.propTypes = {

};

export default Login;