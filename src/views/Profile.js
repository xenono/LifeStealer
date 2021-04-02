import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import CheckUserAuth from "hoc/checkUserAuth";
import MainTemplate from "../templates/MainTemplate";
import EditProfileForm from "components/EditProfileForm/EditProfileForm";

import { getUser as getUserAction } from "actions/action";
import Button from "../components/Button/Button";
import ProfilePage from "../components/pages/ProfilePage";
import Link from "../components/Link/Link";


const StyledButton = styled(Button)`
  width: 60%;
  text-align: center;
  color: #fff;
  font-size: 36px;
  font-weight: 500;
  &:hover{
    color: #fff;
  }
`

const Profile = ({ cookies, getUser, user}) => {
  useEffect(() => {
    getUser();
  },[])
  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <ProfilePage user={user} />
      </CheckUserAuth>
      <StyledButton as={Link} to="/editProfile"> Edit your profile </StyledButton>
    </MainTemplate>
  );
};

const mapStateToProps = ({ user }) => {
  return { user};
};

const mapDispatchToProps = () => dispatch => ({
  getUser: () => dispatch(getUserAction())
});

Profile.propTypes = {
  cookies: PropTypes.object.isRequired,
  getUser: PropTypes.func,
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);