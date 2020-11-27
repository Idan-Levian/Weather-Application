import React from 'react';
import * as S from './style';

import iconSrc from '../../assets/images/searchIcon.png';

const SearchBar = ({ placeholder, onClick, value, onChange }) => {
  return (
    <S.SearchBar>
      <S.Input
        type='text'
        onClick={onClick}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <S.SearchIcon iconSrc={iconSrc} />
    </S.SearchBar>
  );
};

export default SearchBar;
