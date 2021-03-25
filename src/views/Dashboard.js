import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CheckUserAuth from "hoc/checkUserAuth";

import { connect } from "react-redux";

import Post from "components/Post/Post";
import MainTemplate from "../templates/MainTemplate";
import Button from "components/Button/Button";

import { fetchPosts as fetchPostsAction } from "actions/action";
import AddPost from "../components/AddPost/AddPost";


const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddPostButtonWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;
const Dashboard = ({ cookies, posts, fetchPosts }) => {
  const [isFormActive, setFormActive] = useState(false);
  const handleButtonClick = () => {
    setFormActive(!isFormActive);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  posts = posts ? posts : [];

  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <AddPostButtonWrapper>
          <StyledButton onClick={handleButtonClick}>Add post</StyledButton>
        </AddPostButtonWrapper>
        {isFormActive && <AddPost />}
        <PostWrapper>
          {posts.length ? posts.slice(0).reverse().map(post => (
            <Post {...post} key={post.title} />
          )) : <p>no posts</p>}
        </PostWrapper>
      </CheckUserAuth>
    </MainTemplate>
  );
};

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPostsAction())
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);