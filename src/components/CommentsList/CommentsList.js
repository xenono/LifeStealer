import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ProfilePicture from "../profilePicture/profilePicture";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { addComment as addCommentAction, dropABlood as dropABloodAction } from "../../actions/action";

const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 20px 30px;
  list-style: none;
  border: 2px solid black;
  background-color: ${({ theme }) => theme.tertiary};
`;

const Comment = styled.li`
  //width: 100%;
  background-color: #dbd9d3;
  border-radius: 10px;
  white-space: normal;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
`;

const Text = styled.p`
  max-width: 100%;
  font-size: 1.5rem;
  margin: 0 0 0 10px;
  word-wrap: anywhere;
`;

const Span = styled.span`
  font-size: 1.5rem;
  display: block;
  font-weight: bold;
`;

const StyledProfilePicture = styled(ProfilePicture)`
  width: 40px;
  height: 40px;
  border: 0;
  align-self: flex-start;
`;

const CommentInput = styled.textarea`
  width: calc(100% - 140px);
  max-width: calc(100% - 140px);
  min-width: calc(100% - 140px);
  min-height: 40px;
  max-height: 75px;
  outline: none;
  border: 0;
  padding: 5px 15px;
  margin-bottom: 10px;
  word-wrap: anywhere;
`;

const SendButton = styled(Button)`
  width: 140px;
  height: 40px;
  outline: none;
  border: none;
  padding: 0;
  background-size: contain;
  margin: auto auto 10px auto;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    opacity: 0.8;
  }
;
`;

const Form = styled.form`
  display: flex;
  position: relative;
`;

const CommentsList = ({ addComment, _id, posts }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(_id, e.target.comment.value);
    e.target.comment.value = "";
  };
  const comments = posts.find(item => item._id === _id).comments;
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <CommentInput name="comment" id={"comment" + _id} placeholder="Add your comment" type="textarea" />
        <SendButton type="submit">Comment</SendButton>
      </Form>
      {comments && comments.slice(0).reverse().map((comment, index) => (
        <Comment key={index}>
          <StyledProfilePicture src={comment.author.profileImage} />
          <Text><Span>{comment.author.name} {comment.author.lastname}</Span>{comment.text}</Text>
        </Comment>
      ))}
    </Wrapper>
  );
};

CommentsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  addComment: PropTypes.func,
  _id: PropTypes.string
};

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

const mapDispatchToProps = dispatch => ({
  addComment: (postId, text) => dispatch(addCommentAction(postId, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);