import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";

import CheckUserAuth from "hoc/checkUserAuth";

import { connect } from "react-redux";

import Post from "components/Post/Post";
import Button from "components/Button/Button"
import Link from 'components/Link/Link'
import MainTemplate from "../templates/MainTemplate";

import { fetchPosts as fetchPostsAction } from "actions/action";


const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 50%;
  text-align: center;
  color: #fff;
  font-size: 36px;
  font-weight: 500;
&:hover{
  color: #fff;
}
`

const Dashboard = ({ cookies, posts, fetchPosts }) => {

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  posts = posts ? posts : [];
  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <StyledButton as={Link} to="/addPost"> Add Post </StyledButton>
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