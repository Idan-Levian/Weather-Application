import React from 'react';
import * as S from './style';

/* Import Components */
import WeatherCard from '../WeatherCard';
import Subtitle from '../Subtitle';

const cardListPrinter = (
  runner,
  background,
  opacity,
  text1,
  text2,
  src,
  text3
) => {
  const list = [];
  for (let index = 0; index < runner; index++) {
    list.push(
      <WeatherCard
        opacity={opacity}
        text1={text1 + index}
        text2={text2 + index}
        src={src}
        text3={text3 + index}
      />
    );
  }
  return list;
};

const CardList = ({
  listTitle,
  background,
  opacity,
  text1,
  text2,
  src,
  text3,
}) => {
  return (
    <S.CardsList>
      <S.ListTitle>
        <Subtitle text={listTitle} />
      </S.ListTitle>
      <S.List>
        {cardListPrinter(5, background, opacity, text1, text2, src, text3)}
      </S.List>
    </S.CardsList>
  );
};

export default CardList;
