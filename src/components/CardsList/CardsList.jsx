import React from 'react';
import * as S from './style';

import WeatherCard from '../WeatherCard';
import Subtitle from '../Subtitle';

// TODO : Remove Dummy data later !!!
const cards = [
  {
    opacity: 0.2,
    text1: 'Erin',
    text2: 'Kerri',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 'Ardyce',
  },
  {
    opacity: 0.2,
    text1: 'Gray',
    text2: 'Lynelle',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 'Catherine',
  },
  {
    opacity: 0.2,
    text1: 'Suellen',
    text2: 'Jeanie',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 'Misti',
  },
  {
    opacity: 0.2,
    text1: 'Conroy',
    text2: 'Janeen',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 'Veda',
  },
  {
    opacity: 0.2,
    text1: 'Torr',
    text2: 'Jocelin',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 'Drusi',
  },
];
const cardListRender = (cards) => {
  return cards.map((card) => {
    return (
      <WeatherCard
        opacity={card.opacity}
        text1={card.text1}
        text2={card.text2}
        src={card.src}
        text3={card.text3}
      />
    );
  });
};

const CardList = ({ listTitle }) => {
  return (
    <S.CardsList>
      <S.ListTitle>
        <Subtitle text={listTitle} />
      </S.ListTitle>
      <S.List>{cardListRender(cards)}</S.List>
    </S.CardsList>
  );
};

export default CardList;
