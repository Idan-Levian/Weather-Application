import React from 'react';
import * as S from './style';

import WeatherCard from '../WeatherCard';
import Subtitle from '../Subtitle';

const cardListRender = (cards) => {
  // 40 cards !
  return cards.map((card) => {
    return (
      <WeatherCard
        opacity={card.opacity}
        text1={card.text1}
        text2={card.text2}
        src={card.src}
        text3={card.text3 + '°'}
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

// TODO : Remove Dummy data later !!!
const cards = [
  {
    text1: '2.9.2020',
    text2: '12:15 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 28,
  },
  {
    text1: '6.3.2020',
    text2: '4:42 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 8,
  },
  {
    text1: '22.12.2019',
    text2: '7:48 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 11,
  },
  {
    text1: '28.3.2020',
    text2: '6:33 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 34,
  },
  {
    text1: '24.6.2020',
    text2: '10:31 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 22,
  },
  {
    text1: '11.2.2020',
    text2: '6:36 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 12,
  },
  {
    text1: '22.9.2020',
    text2: '10:51 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 29,
  },
  {
    text1: '3.6.2020',
    text2: '2:44 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 23,
  },
  {
    text1: '8.3.2020',
    text2: '2:26 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 12,
  },
  {
    text1: '7.12.2019',
    text2: '9:37 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 32,
  },
  {
    text1: '3.6.2020',
    text2: '1:05 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 10,
  },
  {
    text1: '17.3.2020',
    text2: '9:52 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 2,
  },
  {
    text1: '18.7.2020',
    text2: '11:53 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 37,
  },
  {
    text1: '29.1.2020',
    text2: '11:06 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 38,
  },
  {
    text1: '30.8.2020',
    text2: '2:19 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 21,
  },
  {
    text1: '4.12.2019',
    text2: '6:39 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 7,
  },
  {
    text1: '5.8.2020',
    text2: '9:30 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 33,
  },
  {
    text1: '17.1.2020',
    text2: '5:35 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 33,
  },
  {
    text1: '4.9.2020',
    text2: '2:48 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 34,
  },
  {
    text1: '12.9.2020',
    text2: '8:12 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 28,
  },
  {
    text1: '14.7.2020',
    text2: '5:46 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 1,
  },
  {
    text1: '19.11.2020',
    text2: '1:51 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 3,
  },
  {
    text1: '17.12.2019',
    text2: '7:57 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 7,
  },
  {
    text1: '24.6.2020',
    text2: '6:29 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 38,
  },
  {
    text1: '8.5.2020',
    text2: '5:08 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 37,
  },
  {
    text1: '31.3.2020',
    text2: '8:51 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 31,
  },
  {
    text1: '27.5.2020',
    text2: '12:54 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 8,
  },
  {
    text1: '30.5.2020',
    text2: '1:00 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 18,
  },
  {
    text1: '9.5.2020',
    text2: '2:11 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 36,
  },
  {
    text1: '2.4.2020',
    text2: '6:20 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 23,
  },
  {
    text1: '13.5.2020',
    text2: '3:30 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 15,
  },
  {
    text1: '20.7.2020',
    text2: '11:20 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 36,
  },
  {
    text1: '15.12.2019',
    text2: '9:42 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 8,
  },
  {
    text1: '18.4.2020',
    text2: '8:05 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 12,
  },
  {
    text1: '22.4.2020',
    text2: '8:10 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 39,
  },
  {
    text1: '22.7.2020',
    text2: '4:44 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 10,
  },
  {
    text1: '13.11.2020',
    text2: '7:29 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 32,
  },
  {
    text1: '29.11.2019',
    text2: '7:06 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 3,
  },
  {
    text1: '10.4.2020',
    text2: '12:35 AM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 39,
  },
  {
    text1: '5.1.2020',
    text2: '4:05 PM',
    src:
      'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
    text3: 34,
  },
];
