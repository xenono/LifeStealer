import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import CheckUserAuth from "hoc/checkUserAuth";

import ProfilePicture from "../components/profilePicture/profilePicture";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import SunflowersImage from "assets/sunflowers.jpg";
import HeadingOne from "../components/Headings/HeadingOne";
import HeadingTwo from "../components/Headings/HeadingTwo";
import MainTemplate from "../templates/MainTemplate";

import { getUser as getUserAction } from "actions/action";


const Wrapper = styled.div`
  position: relative;
`;

const ProfileBackground = styled.div`
  width: 100%;
  height: 400px;
  background: url(${SunflowersImage}) center;
  background-size: cover;
`;

const BasicInfo = styled.div`
  margin: 180px auto 0 auto;
  text-align: center;

  h2 {
    color: #A1A1A1;
  }
`;
const Profile = ({ cookies, getUser, user: {name, lastname, profileImage, backgroundImage,job, country,city,introduction,workDescription, hobbyDescription } }) => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <Wrapper>
          <ProfileBackground />
          <ProfilePicture src={profileImage} mainProfile />
          <BasicInfo>
            <HeadingOne>{name} {lastname}</HeadingOne>
            <HeadingTwo>{job}</HeadingTwo>
            <HeadingTwo>{city}, {country}</HeadingTwo>
          </BasicInfo>
          <ProfileInfo introContent={introduction} workContent={workDescription} hobbyContent={hobbyDescription}/>
        </Wrapper>
      </CheckUserAuth>
    </MainTemplate>
  );
};

const mapStateToProps = ({user}) => {
  return { user }
}

const mapDispatchToProps = () => dispatch => ({
  getUser: () => dispatch(getUserAction())
});

Profile.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);