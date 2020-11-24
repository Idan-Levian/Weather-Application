import styled from 'styled-components';
import colorConvert from 'color-convert';

const bgColorHelper = (color) => {
  return color
    ? color.slice(0, 1) === '#'
      ? colorConvert.hex.rgb(color).toString()
      : colorConvert.keyword.rgb(color).toString()
    : colorConvert.keyword.rgb('gray').toString();
};

export const Backdrop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : '100%')};
  border: 1px solid black;
  background: rgba(
    ${({ color }) => bgColorHelper(color)},
    ${({ opacity }) => (opacity ? opacity : '1')}
  );
`;
