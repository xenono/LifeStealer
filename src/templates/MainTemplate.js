import React from "react";
import Navigation from "components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { theme } from "theme/theme";
import { ThemeProvider } from "styled-components";

const MainTemplate = ({ children }) => {

  return (
  <>
    <ThemeProvider theme={theme}>
      <>
        <Navigation />
        {children}
        <Footer />
      </>
    </ThemeProvider>

  </>
)};

export default MainTemplate;