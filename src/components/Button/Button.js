import styled from 'styled-components'

const Button = styled.button`
  font-size: 36px;
  color: #FFF;
  background-color: ${({theme}) => theme.primary};
  border: none;
  padding: 10px 50px;
  margin: 40px auto;
  outline: none;
  transition: all 0.3s;
  
  &:hover {
    cursor: pointer;
    background-color: #6FB000;
  }
`

export default Button