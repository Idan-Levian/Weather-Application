import React from 'react';
import * as S from './style';

import iconSrc from '../../assets/images/searchIcon.png';

const SearchBar = ({
  placeholder,
  onChangeHandler,
  value,
  onSubmitHandler,
}) => {
  return (
    <S.SearchBar onSubmit={onSubmitHandler}>
      <label htmlFor='searchBar'>
        <S.Input
          type='text'
          onChange={onChangeHandler}
          value={value}
          placeholder={placeholder}
        />
      </label>
      <S.SearchIcon iconSrc={iconSrc} />
    </S.SearchBar>
  );
};

export default SearchBar;
