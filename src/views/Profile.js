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
import ProfilePage from "../components/pages/ProfilePage";


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Profile = ({ cookies, getUser, user }) => {
  const [isEditFormActive, showEditForm] = useState(false)
  useEffect(() => {
    getUser();
  }, []);
  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
          <ProfilePage user={user}/>
          <ButtonWrapper>
            <Button onClick={() => showEditForm(!isEditFormActive)}>Edit Profile</Button>
          </ButtonWrapper>
          {isEditFormActive && <EditProfileForm showEditForm={showEditForm} user={user}/>}
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