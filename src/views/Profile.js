import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import CheckUserAuth from "hoc/checkUserAuth";
import ProfilePicture from "../components/profilePicture/profilePicture";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import HeadingOne from "../components/Headings/HeadingOne";
import HeadingTwo from "../components/Headings/HeadingTwo";
import MainTemplate from "../templates/MainTemplate";
import EditProfileForm from 'components/EditProfileForm/EditProfileForm'

import { getUser as getUserAction } from "actions/action";
import Button from "../components/Button/Button";


const Wrapper = styled.div`
  position: relative;
`;

const ProfileBackground = styled.div`
  width: 100%;
  height: 400px;
  background: url(${({src}) => src}) center;
  background-size: cover;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BasicInfo = styled.div`
  margin: 180px auto 0 auto;
  text-align: center;

  h2 {
    color: #A1A1A1;
  }
`;
const Profile = ({ cookies, getUser, user: {name, lastname, profileImage, backgroundImage,job, country,city,introduction,workDescription, hobbyDescription } }) => {
  const [isEditFormActive, setEditForm] = useState(false)
  useEffect(() => {
    getUser();
  }, []);
  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <Wrapper>
          <ProfileBackground src={backgroundImage}/>
          <ProfilePicture src={profileImage} mainProfile />
          <BasicInfo>
            <HeadingOne>{name} {lastname}</HeadingOne>
            <HeadingTwo>{job}</HeadingTwo>
            <HeadingTwo>{city}, {country}</HeadingTwo>
          </BasicInfo>
          <ProfileInfo introContent={introduction} workContent={workDescription} hobbyContent={hobbyDescription}/>
          <ButtonWrapper>
            <Button onClick={() => setEditForm(!isEditFormActive)}>Edit profile</Button>
          </ButtonWrapper>
          {isEditFormActive && <EditProfileForm name={name} lastname={lastname} job={job} city={city} country={country} introduction={introduction} workDescription={workDescription} hobbyDescription={hobbyDescription}/>}
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