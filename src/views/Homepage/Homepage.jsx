import React from 'react';

import * as S from './style';
import backgroundImage from '../../assets/images/background.jpg';
import SearchBar from '../../components/SearchBar';
import CurrentWeather from '../../components/CurrentWeather';
import WeatherDetails from '../../components/WeatherDetails';
import CardsList from '../../components/CardsList';

import GlobalStyle from '../../styles/global.styles';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

const Homepage = () => {
  return (
    <S.Container imgSrc={backgroundImage}>
      <S.HomepageTitle>Weather App</S.HomepageTitle>
      <S.Wrapper>
        <GlobalStyle />
        <S.Header>
          <S.HeaderWrapper>
            <SearchBar placeholder='Tel Aviv' />
          </S.HeaderWrapper>
        </S.Header>

        <S.Main>
          <S.CurrentWeatherHeader>
            <Title text='Tel Aviv, IL' />
            <Subtitle text='Friday 27 Nov' />
          </S.CurrentWeatherHeader>

          <S.MainCurrentWrapper>
            <CurrentWeather bodyTitleText='105°' bodySubtitleText='Super Hot' />
          </S.MainCurrentWrapper>

          <S.MainDetailsWrapper>
            <WeatherDetails />
          </S.MainDetailsWrapper>
        </S.Main>

        <div>
          <CardsList listTitle='Forecast' />
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default Homepage;
