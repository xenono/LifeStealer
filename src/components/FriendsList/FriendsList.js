import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import { getFriends as getFriendsAction, OPEN_CHATBOX } from "actions/action";
import ProfilePicture from "../profilePicture/profilePicture";
import HeadingOne from "../Headings/HeadingOne";


const StickyWrapper = styled.div`
  position: sticky;
  width: 100%;
  height: calc(100vh);
  top: 0;
  bottom: 0;
  border-left: 4px solid ${({ theme }) => theme.tertiary};
`;

const FriendsUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  margin-left: 10px;
`;

const FriendLi = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;

  &:hover {
    background-color: ${({theme}) => theme.secondary};
    cursor: pointer;
  }
`;

const StyledProfilePicture = styled(ProfilePicture)`
  width: 40px;
  height: 40px;
  border: 0;
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding: 20px;
  margin: 0;
  border-bottom: 2px solid ${({ theme }) => theme.tertiary};
`
const FriendsList = ({ getFriends, friendsList, openChatbox }) => {

  const handleFriendClick = (friend) => {
    openChatbox(friend)
  }
  useEffect(() => {
    getFriends();
  }, []);
  return (
    <StickyWrapper>
      <Heading>Your friends</Heading>
      <FriendsUl>
        {friendsList ? friendsList.map((friend, index) => (
            <FriendLi key={index} onClick={() => handleFriendClick(friend)}>
              <StyledProfilePicture src={friend.profileImage}/>
              <Paragraph>{friend.name} {friend.lastname}</Paragraph>
            </FriendLi>
          )) : (<p>no friends XD</p>)}
      </FriendsUl>
    </StickyWrapper>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    friendsList: user.friendsList
  };
};

const mapDispatchToProps = dispatch => ({
  getFriends: () => dispatch(getFriendsAction()),
  openChatbox: (friend) => dispatch({type: OPEN_CHATBOX, payload: friend})
});

FriendsList.propTypes = {
  getFriends: PropTypes.func,
  friendsList: PropTypes.array,
  openChatbox: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);