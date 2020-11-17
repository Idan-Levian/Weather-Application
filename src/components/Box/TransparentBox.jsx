import React from 'react';
import * as S from './style';
import Loader from '../Loader/Loader';

const TransparentBox = ({ color, opacity }) => {
  return (
    <S.TransparentBox opacity={opacity} color={color}>
      <Loader />
    </S.TransparentBox>
  );
};

export default TransparentBox;
