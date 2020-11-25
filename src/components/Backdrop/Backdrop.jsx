import React from 'react';
import * as S from './style';

const Backdrop = ({ color, opacity, children, width }) => {
  return (
    <S.Backdrop opacity={opacity} width={width} color={color}>
      {children}
    </S.Backdrop>
  );
};

export default Backdrop;
