import React from 'react';

import * as S from './style';

import GlobalStyle from '../../styles/global.styles';
import CurrentWeatherContainer from '../../containers/CurrentWeatherContainer/CurrentWeatherContainer';
import ForecastContainer from '../../containers/ForecastContainer/ForecastContainer';
import SearchbarContainer from '../../containers/SearchbarContainer/SearchbarContainer';

import { WeatherContextProvider } from '../../contexts/weatherContext';

const Homepage = () => {
  return (
    <WeatherContextProvider>
      <S.Container>
        <S.HomepageTitle>Weather App</S.HomepageTitle>
        <S.Wrapper>
          <GlobalStyle />
          <SearchbarContainer />
          <CurrentWeatherContainer />
          <ForecastContainer />
        </S.Wrapper>
      </S.Container>
    </WeatherContextProvider>
  );
};

export default Homepage;
