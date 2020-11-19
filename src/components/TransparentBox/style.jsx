import styled from 'styled-components';

export const TransparentBox = styled.div`
  margin: 15px;
  background-color: ${({ color }) => color};
  border: 1px solid black;
  opacity: ${({ opacity }) => opacity};
`;
