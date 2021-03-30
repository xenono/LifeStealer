import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";

import CheckUserAuth from "hoc/checkUserAuth";

import { connect } from "react-redux";

import Post from "components/Post/Post";
import MainTemplate from "../templates/MainTemplate";

import { fetchPosts as fetchPostsAction } from "actions/action";
import AddPost from "../components/AddPost/AddPost";


const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Dashboard = ({ cookies, posts, fetchPosts }) => {

  useEffect(() => {
    fetchPosts();
  }, []);

  posts = posts ? posts : [];
  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <AddPost />
        <PostWrapper>
          {posts.length > 0? posts.slice(0).reverse().map(post => (
            <Post {...post} key={post.createdAt}/>
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

Dashboard.propTypes = {
  cookies: PropTypes.object,
  posts:  PropTypes.array,
  fetchPosts: PropTypes.func
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);