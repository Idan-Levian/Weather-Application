import React from 'react';
import * as S from './style';

/* Import Components */
import TransparentBox from '../TransparentBox';
import Subtitle from '../Subtitle';
import Icon from '../Icon';

const WeatherCard = ({ color, opacity, text1, text2, src, text3 }) => {
  return (
    <S.Card>
      <TransparentBox color={color} opacity={opacity}>
        <Subtitle text={text1} />
        <Subtitle text={text2} />
        <Icon src={src} />
        <Subtitle text={text3} />
      </TransparentBox>
    </S.Card>
  );
};

export default WeatherCard;
