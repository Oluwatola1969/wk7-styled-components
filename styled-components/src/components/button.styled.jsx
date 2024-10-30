import styled from 'styled-components';


const StyledButton = styled.button`
  border-radius: 10px;
  background-color: ${({theme})=> theme.color.button};
  color: #fff;
  width:200px;
  padding: 10px 20px;
  outline: none;
  cursor:pointer;
  border:none;
`

export default StyledButton;