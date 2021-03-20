import React from "react";
import styled from 'styled-components'
import PropTypes from "prop-types";

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

const TextContent = styled.div`
    padding: 10px 20px;
`

const ReactionBar = styled.div`
  height: 50px;
  background-color: ${({bColor}) => bColor};
`

const Post = ({ title, content, time, date, image, background }) => {
  return (
    <Wrapper bColor={background}>
      <TextContent>
        <h1>{title}</h1>
        <p>{content}</p>
      </TextContent>
      <Image src={image} alt="" />
      <ReactionBar bColor={background}/>
    </Wrapper>
  );
}

Post.propTypes = {
  
};

export default Post;