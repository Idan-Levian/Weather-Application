import React from 'react';
import * as S from './style';

const Title = ({ city, country }) => {
  return (
    <S.Title>
      {city}, {country}
    </S.Title>
  );
};

export default Title;
