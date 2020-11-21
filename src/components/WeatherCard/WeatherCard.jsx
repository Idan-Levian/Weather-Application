import React from 'react';
import * as S from './style';

/* Import Components */
import TransparentBox from '../TransparentBox';
import Subtitle from '../Subtitle';
import Icon from '../Icon';

const WeatherCard = () => {
  return (
    <S.Card>
      <TransparentBox color='lightgray' opacity='0.2'>
        <Subtitle text='text1' />
        <Subtitle text='text2' />
        <Icon src='https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png' />
        <Subtitle text='text3' />
      </TransparentBox>
    </S.Card>
  );
};

export default WeatherCard;
