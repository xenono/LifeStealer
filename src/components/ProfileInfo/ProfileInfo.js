import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from 'components/Button/Button'

const Wrapper = styled.div`
  width: 60%;
  margin: 100px auto 0 auto;
`;
const TileContent = styled.div`
  text-align: center;
  border-radius: 40px;
  border: 4px solid rgba(0, 0, 0, 0.25);
  padding: 30px;
  margin: 30px 0;
  min-height: 440px;

  h1 {
    font-size: 36px;
    color: #D80027;
    font-weight: normal;
  }

  p {
    font-size: 30px;
    color: #444444;
  }
`;

const TilesList = styled.ul`
  display: flex;
  padding: 0;
  margin-left: 5px;
`;
const TileListLi = styled.li`
  font-size: 30px;
  padding: 5px 40px;
  background-color: #FFFFFF;
  color: #000;
  list-style: none;
  margin-right: 40px;

  &:hover {
    cursor: pointer;
    color: #a1a1a1;
  }

  ${({ active }) => active && css`
    background-color: #D80027;
    color: #FFFFFF;

    &:hover {
      cursor: default;
      color: white;
    }
  `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProfileInfo = ({ intro, work, hobby }) => {
  const [activeTile, setActiveTile] = useState(0);

  intro = {
    title: "Quick Introductiom",
    content: "I am a Full Stack Engineer with over 15 years of experience. constantly learning and improving my skills, always strive to deliver more than expected. I believe that no one is so senior that cannot learn and no one is so junior that cannot teach\n" +
      "\n" +
      "Skills: JavaScript, Typescript, ES6+, Node.JS, Express, React.JS, Redux, React Native, SQL, SQL Server, MySQL, PostgreSQL, MongoDB, Rest, GraphQL, HTML5, CSS3, SASS, UI, UX.",
  };
  work = {
    title: "About my work",
    content: "Full Stack Engineer\n" +
      "GLC Consulting\n" +
      "Jul 2006 - Present 14 years 9 months\n" +
      "\n" +
      "Brazil\n" +
      "\n" +
      "Company focused on municipality's tax management sector, some solutions including a service tax management application, invoice management application and movement of goods, transportation, communication services tax management application",
  };
  hobby = {
    title: "About my hobby",
    content: "I love cookies.",
  };


  const content = {
    0: intro,
    1: work,
    2: hobby
  };

  return (
    <Wrapper>
      <TilesList>
        <TileListLi active={activeTile === 0 ? true : null} onClick={() => setActiveTile(0)}>Info</TileListLi>
        <TileListLi active={activeTile === 1 ? true : null} onClick={() => setActiveTile(1)}>Work</TileListLi>
        <TileListLi active={activeTile === 2 ? true : null} onClick={() => setActiveTile(2)}>Hobby</TileListLi>
      </TilesList>
      <TileContent>
        <h1>{content[activeTile].title}</h1>
        <p>{content[activeTile].content}</p>
      </TileContent>
      <ButtonWrapper>
        <Button>Edit profile</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

ProfileInfo.propTypes = {};

export default ProfileInfo;