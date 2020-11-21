import React from 'react';
import * as S from './style';

/* Import Components */
import TransparentBox from '../TransparentBox';
import Subtitle from '../Subtitle';

const WeatherDetails = () => {
  return (
    <TransparentBox opacity='0.15' color='gray' width='50%'>
      <S.UL>
        <S.LI>
          <Subtitle text='6&deg;' />
          <Subtitle text='Hight' />
        </S.LI>
        <S.LI>
          <Subtitle text='3&deg;' />
          <Subtitle text='Low' />
        </S.LI>
        <S.LI>
          <Subtitle text='3.1mph' />
          <Subtitle text='Wind' />
        </S.LI>
        <S.LI>
          <Subtitle text='70%' />
          <Subtitle text='Rain' />
        </S.LI>
        <S.LI>
          <Subtitle text='6:40' />
          <Subtitle text='Sunrise' />
        </S.LI>
        <S.LI>
          <Subtitle text='7:19' />
          <Subtitle text='Sunset' />
        </S.LI>
      </S.UL>
    </TransparentBox>
  );
};

export default WeatherDetails;
