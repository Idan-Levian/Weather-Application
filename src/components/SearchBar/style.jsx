import styled from 'styled-components';

export const Input = styled.input`
  padding-left: 12px;
  border-radius: 12px;
  margin: auto;
  display: inline-block;
  border: 1px solid black;
  box-sizing: border-box;
  width: 50%;
  height: 42px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;

  &:focus {
    border: 2px solid #75bcce;
  }
`;
