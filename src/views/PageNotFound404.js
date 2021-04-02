import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CheckUserAuth from "../hoc/checkUserAuth";
import MainTemplate from "../templates/MainTemplate";
import Face404 from 'assets/404.svg'
import HeadingTwo from "components/Headings/HeadingTwo";
import HeadingOne from "components/Headings/HeadingOne";

const Wrapper = styled.div`
  height: calc(100vh - 91px);
  display: flex;
  position: relative;
`;

const FaceIcon = styled.img`
  position: absolute;
  top:2.5%;
  left:50%;
  transform: translateX(calc(-50% - 44.5px));
`

const TextWrapper = styled.div`
  position: absolute;
  top:55%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`

const PageNotFound404 = ({ cookies }) => {
  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <Wrapper>
          <FaceIcon src={Face404} alt="Smile Face with a sword in its forehead" />
          <TextWrapper>
            <HeadingOne>Error 404</HeadingOne>
            <HeadingTwo>Page not found</HeadingTwo>
          </TextWrapper>
        </Wrapper>

      </CheckUserAuth>
    </MainTemplate>
  );
};

PageNotFound404.propTypes = {
  cookies: PropTypes.object.isRequired
};

export default PageNotFound404;