import styled from 'styled-components'

const Input = styled.input`
  width: 50%;
  min-width: 400px;
  height: 50px;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  outline: none;
  border: 2px solid ${({theme}) => theme.secondary};
  padding: 10px 10px;
  &:active,&:focus {
    border-radius: 10px;
    border: 2px solid ${({theme}) => theme.tertiary};
  }
`

export default Input