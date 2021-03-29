import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../../actions/action";
import Link from "components/Link/Link";

const Wrapper = styled.div`
  width: 520px;
  height: 40px;
  position: relative;
  background-color: rgba(35, 31, 32, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 90%;
  height: 80%;
  border: none;
  background-color: transparent;
  outline: none;
`;

const UserList = styled.ul`
  position: absolute;
  z-index: 999;
  padding: 0;
  width: 100%;
  top: 100%;
  margin: 0;
  background-color: #fff;
  border: 5px solid ${({ theme }) => theme.tertiary};
`

const UserLi = styled.li`
  height: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`

const ProfileCircle = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 30px;
  border-radius: 200px;
`

const Paragraph = styled.p`
  font-size: 1.5rem;
`

const SearchBar = () => {
  const [matchedUsers, setMatchedUsers] = useState([]);
  const searchFilterRef = useRef(null)

  const handleChange = async (e) => {
    try {
        const getMatches = await axios.post(API_URL + "/findProfile", { searchFilter: e.target.value }, { withCredentials: true });
        setMatchedUsers(getMatches.data)
      if(e.target.value.length === 0){
        setMatchedUsers([])
      }
    } catch(err){
      console.log(err)
    }
  };
  const handleLiClick = () => {
    searchFilterRef.current.value = ""
    setMatchedUsers([])
  }

  return (
    <Wrapper>
      <StyledInput type="text" placeholder="Search for a friend" onChange={handleChange} ref={searchFilterRef}/>
      {matchedUsers.length !== 0 && <UserList>
        {matchedUsers.map(user => (
          <UserLi as={Link} key={user.id} to={"/profile/" + user.id} onClick={handleLiClick}>
            <ProfileCircle src={user.profileImage} />
            <Paragraph>{user.name}  {user.lastname}</Paragraph>
          </UserLi>
        ))}
      </UserList>}
    </Wrapper>
  );
};

SearchBar.propTypes = {};

export default SearchBar;