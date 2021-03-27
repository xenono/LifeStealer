import React from "react";
import styled from 'styled-components'
import PropTypes from "prop-types";

const Paragraph = styled.p`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
`
const Wrapper = styled.div`
  width: 70%;
  background-color: ${({theme}) => theme.tertiary};
  border: 2px solid ${({theme}) => theme.primary};
`
const Error = ({message}) => {
  return (
    <Wrapper>
      <Paragraph>{message}</Paragraph>
    </Wrapper>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export default Error;