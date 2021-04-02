import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import FormWrapper from "../FormWrapper/FormWrapper";
import UserInput from "../Inputs/UserInput/UserInput";
import Button from "components/Button/Button";
import FileInput from "../Inputs/FileInput/FileInput";

import { editUser as editUserAction, RESET_FORM_DATA } from "actions/action";
import Error from "../Error/Error";

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const FlexWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  text-align: center;
`;
const EditProfileForm = ({
                           user: { city, country, job, workDescription, introduction, hobbyDescription },
                           editUser,
                           error,
                           resetFormData,
                           successSubmission
                         }) => {

  const [formSubmitted, setFormSubmission] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const job = e.target.job.value;
    const workDescription = e.target.workDescription.value;
    const introduction = e.target.introduction.value;
    const hobbyDescription = e.target.hobbyDescription.value;
    const profileImage = e.target.profileImage.files[0];
    const backgroundImage = e.target.backgroundImage.files[0];
    const userInfo = {
      city, country, job, workDescription, introduction, hobbyDescription, profileImage, backgroundImage
    };
    editUser(userInfo);
    setFormSubmission(true);
  };
  useEffect(() => {
    resetFormData()
  },[])
  if (formSubmitted && !error && successSubmission) {
    return <Redirect to="/profile" />;
  }
  return (
    <FormWrapper>
      {error && <Error message={error} />}
      <Form onSubmit={handleSubmit} enctype="multipart/form-data">
        <UserInput label="City" placeholder="Your city." id="city" defaultValue={city} />
        <UserInput label="Country" placeholder="Your country." id="country" defaultValue={country} />
        <UserInput label="Job" placeholder="Your position at work." id="job" defaultValue={job} />
        <UserInput label="Job description" placeholder="Say something about your job." id="workDescription"
                   type="textarea" defaultValue={workDescription} />
        <UserInput label="Quick introduction" placeholder="Say something about you and you life." id="introduction"
                   type="textarea" defaultValue={introduction} />
        <UserInput label="About you hobby" placeholder="Say something about your hobby." id="hobbyDescription"
                   type="textarea" defaultValue={hobbyDescription} />
        <FlexWrapper>
          <FileInput label="Profile image" id="profileImage" text="Choose image" />
          <FileInput label="Profile background image" id="backgroundImage" text="Choose image" />
        </FlexWrapper>
        <ButtonWrapper>
          <Button type="submit">Edit</Button>
        </ButtonWrapper>
      </Form>
    </FormWrapper>
  );
};

EditProfileForm.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  job: PropTypes.string,
  workDescription: PropTypes.string,
  introduction: PropTypes.string,
  hobbyDescription: PropTypes.string,
  editUser: PropTypes.func,
  showEditForm: PropTypes.func,
  user: PropTypes.object,
  error: PropTypes.string
};

const mapDispatchToProps = () => dispatch => ({
  editUser: (userInfo) => dispatch(editUserAction(userInfo)),
  resetFormData: () => dispatch({ type: RESET_FORM_DATA })
});

const mapStateToProps = ({ formData }) => {
  return {
    error: formData.error,
    successSubmission: formData.successSubmission
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);