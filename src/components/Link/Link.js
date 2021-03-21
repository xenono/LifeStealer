import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

const Link = styled(RouterLink)`
  font-size: 20px;
  text-decoration: none;
  font-weight: 600;
  color: black;
  
  &:hover {
    color: ${({theme}) => theme.secondary}
  }

  &.active {
    color: red;
    text-decoration: underline;
  }
`;

export default Link