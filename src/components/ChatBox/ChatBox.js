import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ProfilePicture from "../profilePicture/profilePicture";

const Wrapper = styled.div`
  width: 100%;
`;

const MemberInfo = styled.div`
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  background-color: ${({theme}) => theme.primary};
`;

const Paragraph = styled.p`
  font-size: 2rem;
  margin-left: 15px;
  color: #fff;
`

const SmallerProfilePicture = styled(ProfilePicture)`
  width: 50px;
  height: 50px;
  border: 0;
`;

const TextBox = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff;
  border-left: 4px solid ${({theme}) => theme.primary};
  border-right: 4px solid ${({theme}) => theme.primary};
`
const InputBox = styled.div`
  width: 100%;
  height: 70px;
  border: 4px solid ${({theme}) => theme.primary};
  background-color: #fff;
`

const ChatBox = ({ chat: { member } }) => {
  return (
    <Wrapper>
      <MemberInfo>
        <SmallerProfilePicture src={member.profileImage} />
        <Paragraph>{member.name} {member.lastname}</Paragraph>
      </MemberInfo>
      <TextBox />
      <InputBox/>
    </Wrapper>
  );
};

ChatBox.propTypes = {};

export default ChatBox;