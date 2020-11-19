import React from 'react';
import * as S from './style';

const SearchBar = ({ placeholder, onClick, value, onChange }) => {
  return (
    <div className='ui search category focus '>
      <div className='ui left icon input'>
        <S.Input
          type='text'
          onClick={onClick}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <i className='search icon'></i>
      </div>
    </div>
  );
};

export default SearchBar;
