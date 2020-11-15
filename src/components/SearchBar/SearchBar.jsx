import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
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

const SearchBar = ({ placeholder, onClick, value, onChange }) => {
  return (
    <div className='ui search category focus '>
      <div className='ui left icon input'>
        <Input
          type='text'
          onClick={onClick}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <i class='search icon'></i>
      </div>
    </div>
  );
};

export default SearchBar;
