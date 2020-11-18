import React from 'react';
import * as S from './style';

const TransparentBox = ({ color, opacity, children }) => {
  return (
    <S.TransparentBox opacity={opacity} color={color}>
      {children}
    </S.TransparentBox>
  );
};

export default TransparentBox;
