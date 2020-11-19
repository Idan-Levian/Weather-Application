import styled from 'styled-components';
import colorConvert from 'color-convert';

export const TransparentBox = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  border: 1px solid black;
  background-color: rgba(
    ${({ color }) =>
      color
        ? color.slice(0, 1) === '#'
          ? colorConvert.hex.rgb(color).toString()
          : colorConvert.keyword.rgb(color).toString()
        : colorConvert.keyword.rgb('gray').toString()},
    ${({ opacity }) => (opacity ? opacity : '1')}
  );
`;
/*    */
