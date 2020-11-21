import React from 'react';
import * as S from './style';

const TransparentBox = ({ color, opacity, children, width }) => {
  return (
    <S.TransparentBox opacity={opacity} width={width} color={color}>
      {children}
    </S.TransparentBox>
  );
};

export default TransparentBox;
