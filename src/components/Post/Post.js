import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PostReactionBar from "../PostReactionBar/PostReactionBar";
import Link from "../Link/Link";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ bColor }) => bColor};
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.7);
`;

const Image = styled.img`
  width: 100%;
  margin: 0 10px;
`;

const Heading = styled.h1`
  font-size: 3rem;
`;
const Paragraph = styled.p`
  font-size: 2.1rem;
  
`;

const Name = styled(Paragraph)`
  &:hover{
    text-decoration: underline;
  }
`

const Span = styled.span`
  margin-left: 15px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 5% 7.5% 5px 7.5%;
`;
const UserInfoWrapper = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
`;

const TimeInfoWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PostInfoWrapper = styled(TimeInfoWrapper)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ProfileCircle = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 30px;
  border-radius: 200px;
`;


const Post = ({ title, content, image, background, creator, createdAt, usersBlood, isUserBlood, _id}) => {
  const date = new Date(createdAt);
  return (
    <Wrapper bColor={background}>
      <ContentWrapper>
        <PostInfoWrapper>
          <UserInfoWrapper>
            <ProfileCircle src={creator.profileImage} />
            <Name as={Link} to={"/profile/" + creator.userId}>{creator.name} {creator.lastname}</Name>
          </UserInfoWrapper>
          <TimeInfoWrapper>
            <Paragraph>{date.getHours()}:{date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}<Span>{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</Span></Paragraph>
          </TimeInfoWrapper>
        </PostInfoWrapper>
        <div>
          <Heading>{title}</Heading>
          <Paragraph>{content}</Paragraph>
        </div>
      </ContentWrapper>
      <Image src={image} alt="" />
      <PostReactionBar usersBlood={usersBlood} isUserBlood={isUserBlood} _id={_id} />

    </Wrapper>
  )
    ;
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  creator: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
  usersBlood: PropTypes.number,
  isUserBlood: PropTypes.bool,
  _id: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default Post;