import React, {  useState } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
import { connect } from "react-redux";
import { addPost as addPostAction } from "actions/action";


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

const AddPost = ({ addPost, error }) => {
    const [isFormActive, setFormActive] = useState(false);
    const handleButtonClick = () => {
      setFormActive(!isFormActive);
    };

    const onSubmit = (e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const content = e.target.content.value;
      const color = e.target.color.value;
      const image = e.target.file.files[0];
      addPost(title, content, color, image);
      if(!error) {
        setFormActive(false);
      }
    };

    const Form = styled.form`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    `;


    return (
      <>
        <AddPostButtonWrapper>
          <StyledButton onClick={handleButtonClick}>Add post</StyledButton>
        </AddPostButtonWrapper>
        {isFormActive && (
          <>
            {error && <Error message={error} />}
            <FormWrapper>
              <Form onSubmit={onSubmit} enctype="multipart/form-data">
                <UserInput label="Title" placeholder="Title of your post." id="title" />
                <UserInput label="What do you want to share?" placeholder="Content of your post." id="content"
                           type="textarea" />
                <FlexWrapper>
                  <ColorInput label="Background color" placeholder="Color in hexadecimal" id="color" />
                  <FileInput label="Image" text="Choose image" id="file" />
                </FlexWrapper>
                <ButtonWrapper>
                  <Button type="submit">
                    Publish
                  </Button>
                </ButtonWrapper>
              </Form>
            </FormWrapper>
          </>)}
      </>
    )
      ;
  }
;

AddPost.propTypes = {
  addPost: PropTypes.func,
  error: PropTypes.string
}

;

const mapDispatchToProps = () => dispatch => (
  {
    addPost: (title, content, color, file) => dispatch(addPostAction(title, content, color, file))
  }
);
const mapStateToProps = ({ error }) => {
  return {
    error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);