import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const ProfilePicture = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  border: 10px solid #D80027;
  object-fit: cover;
  margin: 0;
  ${({mainProfile}) => mainProfile && css `
    position: absolute;
    top: 240px;
    left: 50%;
    transform: translate(-50%);
  `}
`

ProfilePicture.propTypes = {};

export default ProfilePicture;