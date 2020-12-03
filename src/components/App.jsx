import React from 'react';
import { WeatherContextProvider } from '../contexts/weatherContext';
import Homepage from '../views/Homepage';

const App = () => {
  return (
    <WeatherContextProvider>
      <Homepage />
    </WeatherContextProvider>
  );
};

export default App;
