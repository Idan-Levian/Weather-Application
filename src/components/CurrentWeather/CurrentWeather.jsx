import React from 'react';
import * as S from './style';

/* Import Components */
import Title from '../Title';
import Subtitle from '../Subtitle';
import Icon from '../Icon';

const CurrentWeather = ({
  headerTitleText,
  headerSubtitleText,
  src,
  bodyTitleText,
  bodySubtitleText,
  width,
  height,
}) => {
  return (
    <S.CurrentWeather>
      <S.CurrentWeatherHeader>
        <Title text={headerTitleText} />
        <Subtitle text={headerSubtitleText} />
      </S.CurrentWeatherHeader>
      <S.CurrentWeatherBody>
        <div style={{ float: 'right' }}>
          <Title text={bodyTitleText} />
          <Subtitle text={bodySubtitleText} />
        </div>
        <div style={{ float: 'right' }}>
          <Icon width={width} height={height} src={src} />
        </div>
      </S.CurrentWeatherBody>
    </S.CurrentWeather>
  );
};

export default CurrentWeather;
