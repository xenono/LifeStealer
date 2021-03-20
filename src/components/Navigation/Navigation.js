import React from "react";
import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import LogoImg from 'assets/Logo.svg'
import { theme } from "../../theme/theme";

const Wrapper = styled.div`
  height: 60px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  //justify-content: center;
  align-items: center;
  padding: 0 100px;
`;

const Logo = styled.img`
  height: 50%;
`

const Link = styled(RouterLink)`
  color: black;
  &.active{
    color:red;
  }
`

const Navigation = () => {
  return (
    <Wrapper>
      <Logo src={LogoImg}/>
      <Link exact activeclass="active" to="/">Dashboard</Link>
      <Link activeclass="active" to="/profile">Profile</Link>
    </Wrapper>
  );
};

export default Navigation;