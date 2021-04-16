import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ChatBox from "../ChatBox/ChatBox";
import ProfilePicture from "../profilePicture/profilePicture";

const Wrapper = styled.div`
  position: sticky;
  width: 100%;
  height: 540px;
  top: calc(100% - 600px);
`;

const SmallerProfilePicture = styled(ProfilePicture)`
  width: 50px;
  height: 50px;
  border: 0;
  border: ${({active,theme}) => active ? `4px solid ${theme.primary}` : '0'};
  &:hover{
    cursor: pointer;
    border: 4px solid ${({theme}) => theme.tertiary}
  }
`;

const ChatBoxes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

const Chats = ({ activeChats }) => {
  const [currentChatBox, setCurrentChatBox] = useState(null);
  useEffect(() => {
    setCurrentChatBox(activeChats[activeChats.length - 1])
  },[activeChats])
  return (
    <Wrapper>
      <ChatBoxes>
        {activeChats.map((chat, index) => (
            <SmallerProfilePicture src={chat.member.profileImage} key={index} onClick={() => setCurrentChatBox(chat)} active={chat === currentChatBox}/>
          )
        )}
      </ChatBoxes>
      {currentChatBox ? <ChatBox chat={currentChatBox}  /> : null}

    </Wrapper>
  );
};

Chats.propTypes = {
  activeChats: PropTypes.arrayOf(PropTypes.object)
};

const mapStateTopProps = ({ activeChats }) => {
  return {
    activeChats
  };
};

export default connect(mapStateTopProps, null)(Chats);