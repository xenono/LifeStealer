import React from "react";
import styled from 'styled-components'
import Input from "../Input/Input";
import Label from "../../Label/Label";

const ShortInputWrapper = styled.div`
  width: 45%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

const StyledColorInput = styled(Input)`
  width: 100%;
  height: 40px;
  padding: 30px 0;
  min-width: 0;
  text-align: center;
  font-size: 1.75rem;
`;
const StyledLabel = styled(Label)`
  text-align: center;
  font-size: 2.25rem;
`;


const ColorInput = () => {
  return (
    <ShortInputWrapper>
      <StyledLabel>Background color</StyledLabel>
      <StyledColorInput type="text" placeholder="Color in hexadecimal" id="color"/>
    </ShortInputWrapper>
  );
};

export default ColorInput;