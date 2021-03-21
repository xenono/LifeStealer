import React from "react";
import styled from "styled-components";

import { connect } from 'react-redux'

import data from "data/posts.json";
import Post from "components/Post/Post";
import { Redirect } from "react-router";


const PostWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Dashboard = ({isLoggedIn}) => {

  if(!isLoggedIn){
    return <Redirect to="/login"/>
  }
  const posts = JSON.parse(JSON.stringify(data));
  return (
    <div>
      <PostWrapper>
        {posts.map(post => (
          <Post {...post} key={post.image} />
        ))}
      </PostWrapper>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isLoggedIn } = state
  return { isLoggedIn }
}

export default connect(mapStateToProps,null)(Dashboard);