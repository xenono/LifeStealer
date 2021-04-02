import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import CheckUserAuth from "../hoc/checkUserAuth";
import MainTemplate from "../templates/MainTemplate";
import styled from "styled-components";
import EditProfileForm from "../components/EditProfileForm/EditProfileForm";


const Wrapper = styled.div`
  margin-top: 30px;
`

const EditProfile = ({ cookies,user }) => {
  return (
    <MainTemplate cookies={cookies}>
      <CheckUserAuth cookies={cookies}>
        <Wrapper>
          <EditProfileForm user={user}/>
        </Wrapper>
      </CheckUserAuth>
    </MainTemplate>
  );
};

EditProfile.propTypes = {

};

const mapStateToProps = ({user}) => {
  return { user }
}

export default connect(mapStateToProps,null)(EditProfile);