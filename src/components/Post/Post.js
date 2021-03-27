import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 60%;
  background-color: ${({bColor}) => bColor};
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  box-shadow: 2px 2px 11px rgba(0,0,0,0.7);
`

const Image = styled.img`
  width: 100%;
  margin: 0 10px;
`

const Heading = styled.h1`
  font-size: 3rem;
`
const Paragraph = styled.p`
  font-size: 2.1rem;
`

const Span = styled.span`
  margin-left: 15px;
`

const ContentWrapper = styled.div`
  width: 100%;
    padding: 5% 7.5% 5px 7.5%;
`
const UserInfoWrapper = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
`

const TimeInfoWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const PostInfoWrapper = styled(TimeInfoWrapper)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

const ProfileCircle = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 30px;
  border-radius: 200px;
`

const ReactionBar = styled.div`
  height: 50px;
  background-color: ${({bColor}) => bColor};
`

const Post = ({ title, content, image, background, creator, createdAt,profileImage }) => {
  const date = new Date(createdAt)
  return (
    <Wrapper bColor={background}>
      <ContentWrapper>
        <PostInfoWrapper>
          <UserInfoWrapper>
            <ProfileCircle src={creator.profileImage}/>
            <Paragraph>{creator.name} {creator.lastname}</Paragraph>
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
      <ReactionBar bColor={background}/>
    </Wrapper>
  );
}

Post.propTypes = {
  
};

export default Post;