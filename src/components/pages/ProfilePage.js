import React, { useEffect, useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import CheckUserAuth from "../../hoc/checkUserAuth";
import ProfilePicture from "../profilePicture/profilePicture";
import HeadingOne from "../Headings/HeadingOne";
import HeadingTwo from "../Headings/HeadingTwo";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const ProfileBackground = styled.div`
  width: 100%;
  height: 400px;
  background: url(${({ src }) => src}) center;
  background-size: cover;
`;



const BasicInfo = styled.div`
  margin: 180px auto 0 auto;
  text-align: center;

  h2 {
    color: #A1A1A1;
  }
`;

const ProfilePage = ({
                   user: {
                     name,
                     lastname,
                     profileImage,
                     backgroundImage,
                     job,
                     country,
                     city,
                     introduction,
                     workDescription,
                     hobbyDescription
                   }
                 }) => {
  return (
    <Wrapper>
      <ProfileBackground src={backgroundImage} />
      <ProfilePicture src={profileImage} mainProfile />
      <BasicInfo>
        <HeadingOne>{name} {lastname}</HeadingOne>
        <HeadingTwo>{job}</HeadingTwo>
        <HeadingTwo>{city}, {country}</HeadingTwo>
      </BasicInfo>
      <ProfileInfo introContent={introduction} workContent={workDescription} hobbyContent={hobbyDescription} />
    </Wrapper>
  );
};

export default ProfilePage;