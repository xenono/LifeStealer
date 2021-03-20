import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'
import ProfilePicture from "../components/profilePicture/profilePicture";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import SunflowersImage from 'assets/sunflowers.jpg'
import LadImage from 'assets/lad.jpg'
import HeadingOne from "../components/Headings/HeadingOne";
import HeadingTwo from "../components/Headings/HeadingTwo";


const Wrapper = styled.div`
  position: relative;
`

const ProfileBackground = styled.div`
  width: 100%;
  height: 400px;
  background: url(${SunflowersImage}) center;
  background-size: cover;
`

const BasicInfo = styled.div`
  margin: 180px auto 0 auto;
  text-align: center;
  
  h2 {
    color: #A1A1A1;
  }
`
const Profile = props => {
  return (
    <Wrapper>
      <ProfileBackground/>
      <ProfilePicture src={LadImage} mainProfile/>
      <BasicInfo>
        <HeadingOne>Max Silver</HeadingOne>
        <HeadingTwo>Project Manager in Amazon</HeadingTwo>
        <HeadingTwo>Liverpool, United Kingdom</HeadingTwo>
      </BasicInfo>
      <ProfileInfo>

      </ProfileInfo>
    </Wrapper>
  );
};

Profile.propTypes = {
  
};

export default Profile;