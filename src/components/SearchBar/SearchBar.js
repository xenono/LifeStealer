import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 520px;
  height: 40px;
  border-radius: 40px;
  background-color: rgba(35,31,32,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled.input`
  width: 90%;
  height: 80%;
  border: none;
  background-color: transparent;
  outline: none;
`

const SearchBar = () => {
  return (
    <Wrapper>
      <StyledInput type="text" placeholder="Search for a friend"/>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  
};

export default SearchBar;