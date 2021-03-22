import React, { useEffect } from "react";
import styled from "styled-components";

import CheckUserAuth from "hoc/checkUserAuth";

import { connect } from 'react-redux'

import Post from "components/Post/Post";
import MainTemplate from "../templates/MainTemplate";

import { fetchPosts as fetchPostsAction } from 'actions/action'


const PostWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Dashboard = ({ cookies,posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts()
  },[])
  posts = posts ? posts : []
  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <PostWrapper>
          {posts.length ? posts.slice(0).reverse().map(post => (
            <Post {...post} key={post.title} />
          )): <p>no posts</p>}
        </PostWrapper>
      </CheckUserAuth>
    </MainTemplate>
  );
};

const mapStateToProps = ({posts}) => {
  return {
    posts
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPostsAction())
})


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);