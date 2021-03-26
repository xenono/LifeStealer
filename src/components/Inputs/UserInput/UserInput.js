import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import Label from "../../Label/Label";

const StyledInput = styled(Input)`
  width: 100%;
  font-size: 1.75rem;
  text-align: left;
`;

const StyledInputWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;

`;
const StyledLabel = styled(Label)`
  text-align: left;
  font-size: 2.25rem;
`;

const Textarea = styled.textarea`
  max-width: 100%;
  min-height: 200px;
  font-size: 1.75rem;
  padding: 10px 10px;
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 10px;
  font-weight: 500;
  outline: none;

  &:active, &:focus {
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.tertiary};
  }
`;

const UserInput = ({ label, placeholder,id, type, defaultValue }) => {
  return (
    <StyledInputWrapper>
      <StyledLabel>{label}</StyledLabel>
      {type === "textarea" ? <Textarea type="text" placeholder={placeholder} id={id}  defaultValue={defaultValue}/> : <StyledInput type="text" placeholder={placeholder} id={id} defaultValue={defaultValue}/>}
    </StyledInputWrapper>
  );
};

UserInput.propTypes = {

};

export default UserInput;