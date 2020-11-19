import styled from 'styled-components';

export const Subtitle = styled.span`
  font-size: ${({ size }) => size};
  font-family: 'Montserrat', sans-serif;
  color: ${({ color }) => color};
  display: block;
  text-align: center;
  padding: 1.7%;
`;
