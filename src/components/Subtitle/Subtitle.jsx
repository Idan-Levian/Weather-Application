import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  color: #a3a09b;
`;

const Subtitle = ({ date }) => {
  return <Span>{date}</Span>;
};

export default Subtitle;
