import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { dropABlood as dropABloodAction } from "actions/action";
import styled from "styled-components";
import PropTypes from "prop-types";
import CommentsList from "components/CommentsList/CommentsList";
import Button from "../Button/Button";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ bColor }) => bColor};
  display: flex;
  justify-content: flex-start;
`;

const ReactionBarButton = styled(Button)`
  margin: 0;
  padding: 0;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 24px;

  &:hover {
    opacity: 0.9;
  }
`;

const TearButton = styled(ReactionBarButton)`
  background-color: ${({ wasTearLeft, theme }) => wasTearLeft && theme.tertiary};

  &:hover {
    background-color: ${({ wasTearLeft, theme }) => wasTearLeft ? theme.tertiary : theme.primary};
  }

  div {
    margin: 0 15px 0 5px;
  }
`;

const CommentButton = styled(ReactionBarButton)`
  margin: 0;
  width: 50%;
  background-color: ${({ theme, areCommentsActive }) => areCommentsActive ? theme.tertiary : theme.primary};

  &:hover {
    background-color: ${({ theme, areCommentsActive }) => areCommentsActive ? theme.tertiary : theme.primary};
  }

  div {
    margin: 5px 15px 0 5px;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
`;


const PostReactionBar = ({ usersBlood, isUserBlood, _id, dropABlood,comments}) => {
  const [wasBloodLeft, setBloodLevel] = useState(false);
  const [areCommentsActive, setComments] = useState(false);
  const handleTearClick = () => {
    setBloodLevel(!wasBloodLeft);
    dropABlood(_id, !wasBloodLeft);
  };
  useEffect(() => {
    setBloodLevel(isUserBlood);
  }, [isUserBlood]);


  return (
    <>
      <Wrapper>
        <TearButton onClick={handleTearClick} wasTearLeft={wasBloodLeft}>
          <span>{usersBlood}</span>
          <Icon>
            <svg width="40" height="40" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.0807 26.903C16.4267 26.8097 20.6848 22.4003 20.5915 17.0543C20.4982 11.7083 10.6463 2.01225 10.6463 2.01225C10.6463 2.01225 1.13872 12.0462 1.23203 17.3922C1.32535 22.7382 5.73474 26.9963 11.0807 26.903ZM10.3169 22.7666C7.2634 22.8164 4.74583 20.3852 4.68908 17.3319C4.74583 20.3852 7.2634 22.8164 10.3169 22.7666Z"
                fill={wasBloodLeft ? "#D80027" : "#fff"} />
              <path
                d="M11.0928 27.5944C5.36757 27.6878 0.647061 23.1293 0.540647 17.4043C0.443507 11.8391 9.74624 1.95878 10.1442 1.53687L10.629 1.0249L11.1315 1.51963C11.5439 1.92741 21.1858 11.4771 21.2829 17.0422C21.3764 22.7674 16.8178 27.488 11.0928 27.5944ZM10.6638 3.01409C8.75227 5.12231 1.84783 13.0471 1.92347 17.3801C2.01012 22.3443 6.10453 26.2982 11.0687 26.2116C16.0328 26.1249 19.9868 22.0305 19.9001 17.0663C19.8244 12.7305 12.6477 5.05501 10.6638 3.01409Z"
                fill="#231F20" />
              <path
                d="M10.329 23.458C6.89385 23.5142 4.06147 20.779 3.99771 17.3439L5.38053 17.3198C5.43062 19.9913 7.6333 22.1184 10.3049 22.0752L10.329 23.458Z"
                fill="#231F20" />
            </svg>
          </Icon>
          <span>{wasBloodLeft ? "Bloody" : "Drop a blood"}</span>
        </TearButton>
        <CommentButton onClick={() => setComments(!areCommentsActive)} areCommentsActive={areCommentsActive}>
          {/*<span>{comments && comments.length}</span>*/}
          <Icon>
            <svg width="40" height="40" viewBox="0 0 682 682" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M53 95L123 67H466L633 86.5L647 424L608 495H279L141 599.5V551L123 495L83.5 475.5L39 424V259.5V153.5L53 95Z"
                fill="#D80027" stroke="#D80027" />
              <path
                d="M572.452 45.9564H108.882C60.4136 45.9564 20.9795 85.3827 20.9795 133.859V417.554C20.9795 465.921 60.2419 505.285 108.57 505.456V634.194L293.58 505.456H572.452C620.92 505.456 660.354 466.022 660.354 417.554V133.859C660.354 85.3827 620.92 45.9564 572.452 45.9564ZM622.891 417.554C622.891 445.363 600.265 467.993 572.452 467.993H281.826L146.033 562.487V467.993H108.882C81.0692 467.993 58.4429 445.363 58.4429 417.554V133.859C58.4429 106.042 81.0692 83.4198 108.882 83.4198H572.452C600.265 83.4198 622.891 106.042 622.891 133.859V417.554Z"
                fill="black" />
            </svg>
          </Icon>
          <span>Comment</span></CommentButton>
      </Wrapper>

      {areCommentsActive && <CommentsList _id={_id} />}
    </>
  );
};

PostReactionBar.propTypes = {
  usersBlood: PropTypes.number.isRequired,
  isUserBlood: PropTypes.bool.isRequired,
  _id: PropTypes.string.isRequired,
  dropABlood: PropTypes.func,
  comments: PropTypes.arrayOf(PropTypes.object)
};



const mapDispatchToProps = dispatch => ({
  dropABlood: (postId, blood) => dispatch(dropABloodAction(postId, blood)),
});


export default connect(null, mapDispatchToProps)(PostReactionBar);