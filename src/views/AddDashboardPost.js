import React from "react";
import styled from 'styled-components'
import PropTypes from "prop-types";
import MainTemplate from "../templates/MainTemplate";
import CheckUserAuth from "../hoc/checkUserAuth";
import AddPost from 'components/AddPost/AddPost'

const Wrapper = styled.div`
  margin-top: 30px;
`

const AddDashboardPost = ({ cookies }) => {
  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <Wrapper>
          <AddPost />
        </Wrapper>
      </CheckUserAuth>
    </MainTemplate>
  );
};

AddDashboardPost.propTypes = {
  cookies: PropTypes.object.isRequired
};

export default AddDashboardPost;