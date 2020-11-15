import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  font-size: ${({ size }) => size};
  font-family: 'Montserrat', sans-serif;
  color: ${({ color }) => color};
`;

const Subtitle = ({ size, date, color = '#a3a09b' }) => {
  return (
    <Span color={color} size={size}>
      {date}
    </Span>
  );
};

export default Subtitle;
