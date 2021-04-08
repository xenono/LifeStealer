import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Label from "../../Label/Label";
import styled from "styled-components";
import Input from "../Input/Input";

const ShortInputWrapper = styled.div`
  width: 45%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const FileInputText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #fff;
  margin: 0;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLabel = styled(Label)`
  text-align: center;
  font-size: 2.25rem;
  width: 100%;
  height: 100%;
`;

const StyledInput = styled(Input)`
  width: 100%;
  height: 40px;
  padding: 30px 0;
  min-width: 0;
  text-align: center;
  font-size: 1.75rem;
  border-color: ${({ theme }) => theme.primary};
  background-color: ${({theme}) => theme.primary};
  &:hover {
    cursor: pointer;
  }
  color: ${({theme}) => theme.primary};

  &::-webkit-file-upload-button {
    z-index: 999;
    //visibility: hidden;
    color: ${({theme}) => theme.primary};
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const FileInput = ({label, id ,text}) => {
  const [filename, setFileName] = useState("");
  const fileInput = useRef(null);

  useEffect(() => {
    fileInput.current.addEventListener("change", (e) => {
      const filenameLength = e.target.value.split("\\").length;
      const filename = e.target.value.split("\\")[filenameLength - 1];
      if (filename.length) {
        setFileName(filename);
      }
    });
  }, [filename]);

  return (
    <ShortInputWrapper>
      <StyledLabel>{label}</StyledLabel>
      <InputWrapper>
        <StyledInput type="file" id={id} ref={fileInput} />
        <FileInputText as={Label}
                       htmlFor={id}> {filename.length > 0 ? filename : text}</FileInputText>
      </InputWrapper>
    </ShortInputWrapper>
  );
}

FileInput.propTypes = {
  label:PropTypes.string,
  text:PropTypes.string,
  id: PropTypes.string,
};


export default FileInput;