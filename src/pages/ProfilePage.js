import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addFriend as addFriendAction, getFriends, getFriends as getFriendsAction } from "actions/action";

import ProfilePicture from "../components/profilePicture/profilePicture";
import HeadingOne from "../components/Headings/HeadingOne";
import HeadingTwo from "../components/Headings/HeadingTwo";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import Button from "components/Button/Button";
import checkIcon from "assets/check.png";

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

const FriendBox = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.primary};
  font-size: 36px;
  padding: 10px 30px;
  margin: 10px auto 0 auto;
  color: white;
  vertical-align: middle;
`;

const Check = styled.img`
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-left: 10px;
`;

const FriendInfoWrapper = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
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
                       },
                       userId,
                       addFriend,
                       friendsList,
                       getFriends
                     }) => {
  useEffect(() => {
    getFriends();
  }, [friendsList]);
  return (
    <Wrapper>
      <ProfileBackground src={backgroundImage} />
      <ProfilePicture src={profileImage} mainProfile />
      <BasicInfo>
        <HeadingOne>{name} {lastname}</HeadingOne>
        <HeadingTwo>{job}</HeadingTwo>
        <HeadingTwo>{city}, {country}</HeadingTwo>
        {userId ? friendsList.length && friendsList.filter(friend => friend && friend._id === userId).length === 1 ?
          <FriendBox><FriendInfoWrapper><span>Friends</span> <Check src={checkIcon} /></FriendInfoWrapper></FriendBox> :
          <Button onClick={() => addFriend(userId)}>Add friend</Button> : null}
      </BasicInfo>
      <ProfileInfo introContent={introduction} workContent={workDescription} hobbyContent={hobbyDescription} />
    </Wrapper>
  );
};

ProfilePage.propTypes = {
  user: PropTypes.object,
  name: PropTypes.string,
  lastname: PropTypes.string,
  profileImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  job: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
  introduction: PropTypes.string,
  workDescription: PropTypes.string,
  hobbyDescription: PropTypes.string,
  userId: PropTypes.string,
  addFriend: PropTypes.func,
  friendsList: PropTypes.array,
  getFriends: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  addFriend: (userId) => dispatch(addFriendAction(userId)),
  getFriends: () => dispatch(getFriendsAction())
});

const mapStateToProps = ({ user }) => {
  return {
    friendsList: user.friendsList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);