import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LogoImg from "assets/Logo.svg";
import { connect } from "react-redux";

import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import Link from "components/Link/Link";

import { logoutUser } from "actions/action";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 50%;
  position: absolute;
  left: 5%;
`;

const StyledButton = styled(Button)`
  height: 80%;
  position: absolute;
  right: 5%;
`;


const LinksWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LoginLinksWrapper = styled(LinksWrapper)`
  width: 40%;

`;

const LoggedInNavigation = (handleLogout) => (
  <>
    <LinksWrapper>
      <Link activeclass="active" exact to="/">Dashboard</Link>
      <SearchBar />
      <Link activeclass="active" to="/profile">Profile</Link>
    </LinksWrapper>
    <StyledButton fontSize="24px" onClick={handleLogout}>Logout</StyledButton>
  </>
);

const LoggedOutNavigation = (
  <LoginLinksWrapper>
    <Link activeclass="active" to="/login">Login</Link>
    <Link activeclass="active" to="/signup">Sign up</Link>
  </LoginLinksWrapper>
);

const Navigation = ({ isLoggedIn, logout }) => {

  return (
    <Wrapper>
      <Logo src={LogoImg} />
      {isLoggedIn ? LoggedInNavigation(logout) : LoggedOutNavigation}
    </Wrapper>
  );
};


const mapStateToProps = (state) => {
  const { isLoggedIn } = state;
  return { isLoggedIn };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser())
});

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);