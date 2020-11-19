import React from 'react';
import * as S from './style';

const Subtitle = ({ size, text, color = '#a3a09b' }) => {
  return (
    <S.Subtitle color={color} size={size}>
      {text}
    </S.Subtitle>
  );
};

export default Subtitle;
