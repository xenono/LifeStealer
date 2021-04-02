import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { addPost as addPostAction, RESET_FORM_DATA } from "actions/action";

import Button from "components/Button/Button";
import UserInput from "../Inputs/UserInput/UserInput";
import ColorInput from "../Inputs/ColorInput/ColorInput";
import FileInput from "../Inputs/FileInput/FileInput";
import FormWrapper from "../FormWrapper/FormWrapper";
import Error from "../Error/Error";


const FlexWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const AddPost = ({ addPost, error, successSubmission,resetFormData }) => {
    const [formSubmitted, setFormSubmission] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const content = e.target.content.value;
      const color = e.target.color.value;
      const image = e.target.file.files[0];
      addPost(title, content, color, image);
      setFormSubmission(true);
    };
    useEffect(() => {
        resetFormData()
    },[])

    if (formSubmitted && !error && successSubmission) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <FormWrapper>
          {error && <Error message={error} />}
          <Form onSubmit={handleSubmit} enctype="multipart/form-data">
            <UserInput label="Title" placeholder="Title of your post." id="title" />
            <UserInput label="What do you want to share?" placeholder="Content of your post." id="content"
                       type="textarea" />
            <FlexWrapper>
              <ColorInput label="Background color" placeholder="Color in hexadecimal" id="color" defaultValue="#FFF" />
              <FileInput label="Image" text="Choose image" id="file" />
            </FlexWrapper>
            <ButtonWrapper>
              <Button type="submit">
                Publish
              </Button>
            </ButtonWrapper>
          </Form>
        </FormWrapper>
      </>
    )
      ;
  }
;

AddPost.propTypes = {
  addPost: PropTypes.func,
  error: PropTypes.string,
  successSubmission: PropTypes.bool
}

;

const mapDispatchToProps = () => dispatch => (
  {
    addPost: (title, content, color, file) => dispatch(addPostAction(title, content, color, file)),
    resetFormData: () => dispatch({ type : RESET_FORM_DATA })
  }
);
const mapStateToProps = ({formData}) => {
  return {
    error: formData.error,
    successSubmission: formData.successSubmission
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);