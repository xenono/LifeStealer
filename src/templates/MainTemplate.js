import React from "react";
import PropTypes from 'prop-types'
import { ThemeProvider } from "styled-components";

import Navigation from "components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { theme } from "theme/theme";

const MainTemplate = ({ children, cookies}) => {

  return (
  <>
    <ThemeProvider theme={theme}>
      <>
        <Navigation cookies={cookies}/>
        {children}
        <Footer />
      </>
    </ThemeProvider>

  </>
)};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  cookies: PropTypes.object.isRequired
}


export default MainTemplate;