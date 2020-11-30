import React from 'react';

import * as S from './style';
import SearchBar from '../../components/SearchBar';

import GlobalStyle from '../../styles/global.styles';
import CurrentWeatherContainer from '../../containers/CurrentWeatherContainer/CurrentWeatherContainer';
import ForecastContainer from '../../containers/ForecastContainer/ForecastContainer';

const Homepage = () => {
  return (
    <S.Container>
      <S.HomepageTitle>Weather App</S.HomepageTitle>
      <S.Wrapper>
        <GlobalStyle />
        <S.Header>
          <S.HeaderWrapper>
            <SearchBar placeholder='Tel Aviv' />
          </S.HeaderWrapper>
        </S.Header>
        <CurrentWeatherContainer />
        <ForecastContainer />
      </S.Wrapper>
    </S.Container>
  );
};

export default Homepage;
