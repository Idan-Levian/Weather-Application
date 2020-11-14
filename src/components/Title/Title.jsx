import React from 'react';

import styled from 'styled-components';

const Header = styled.h1`
  font-family: 'Montserrat', sans-serif;
`;

const Title = ({ city, country }) => {
  return (
    <Header>
      {city}, {country}
    </Header>
  );
};

export default Title;
