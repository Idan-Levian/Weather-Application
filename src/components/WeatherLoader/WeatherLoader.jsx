import React from 'react';
import Cloud from '../assets/icons/Cloud';
import Sun from '../assets/icons/Sun';
import * as S from './styled';

const WeatherLoader = ({ text, sunColor, cloudColor }) => {
  return (
    <S.WeatherLoader
      style={{ opacity: 1 }}
      sunColor={sunColor}
      cloudColor={cloudColor}
    >
      <Cloud />
      <Sun />
      <S.Rain>
        <S.Drop>
          <span className='drop'></span>
          <span className='drop'></span>
          <span className='drop'></span>
          <span className='drop'></span>
          <span className='drop'></span>
          <span className='drop'></span>
          <span className='drop'></span>
          <span className='drop'></span>
          <span className='drop'></span>
          <span className='drop'></span>
        </S.Drop>
      </S.Rain>

      <S.Text>{text}</S.Text>
    </S.WeatherLoader>
  );
};

export default WeatherLoader;
