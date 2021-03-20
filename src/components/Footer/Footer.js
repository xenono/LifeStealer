import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 1.75rem;
  text-align: center;
  padding: 5px 0;
  background-color: #D80027;
  color: White;
`

const Footer = props => {
  return (
    <Wrapper>
      &copy; Copyrights Adrian Urbanczyk
    </Wrapper>
  );
};

Footer.propTypes = {

};

export default Footer;