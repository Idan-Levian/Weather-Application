import React from 'react';
import Cloud from '../assets/icons/Cloud';
import Sun from '../assets/icons/Sun';
import * as S from './styled';
import * as H from './helpers';

const WeatherLoading = ({ text, sunColor, cloudColor }) => {
  return (
    <S.WeatherLoading
      style={{ opacity: 1 }}
      sunColor={sunColor}
      cloudColor={cloudColor}
    >
      <Cloud />
      <Sun />
      <S.Rain>{H.dropsPrinter(10)}</S.Rain>

      <S.Text>{text}</S.Text>
    </S.WeatherLoading>
  );
};

export default WeatherLoading;
