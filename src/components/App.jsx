import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import Title from './Title/Title';

import GlobalStyle from '../styles/global.styles';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <SearchBar />
      <Title />
    </div>
  );
};

export default App;
