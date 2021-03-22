import React from "react";
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


export default MainTemplate;