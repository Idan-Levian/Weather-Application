import React from 'react';
import styled from 'styled-components';
import Loader from '../Loader/Loader';

const TransparentBox = styled.div`
  margin: 15px;
  background-color: ${({ color }) => color};
  border: 1px solid black;
  opacity: ${({ opacity }) => opacity};
`;

const Box = ({ color, opacity }) => {
  return (
    <TransparentBox opacity={opacity} color={color}>
      <Loader />
    </TransparentBox>
  );
};

export default Box;
