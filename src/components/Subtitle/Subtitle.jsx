import React from 'react';
import * as S from './style';

const Subtitle = ({ size, date, color = '#a3a09b' }) => {
  return (
    <S.Subtitle color={color} size={size}>
      {date}
    </S.Subtitle>
  );
};

export default Subtitle;
