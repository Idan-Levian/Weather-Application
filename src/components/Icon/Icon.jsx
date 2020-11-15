import React from 'react';
import styled from 'styled-components';

const IconDisplay = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const Icon = ({ src, width, height }) => {
  return <IconDisplay width={width} height={height} src={src}></IconDisplay>;
};

export default Icon;
