import React from "react";
import styled from 'styled-components'
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 70%;
  background-color: ${({theme}) => theme.tertiary};
  border: 2px solid ${({theme}) => theme.primary};
  margin: 30px 0 15px 0;
`
const Paragraph = styled.p`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
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