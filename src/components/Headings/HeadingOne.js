import styled from "styled-components";

const HeadingOne = styled.h1`
  color: ${(props) => props.color || props.theme.primary};
  font-size: 4.8rem;

`;
export default HeadingOne;