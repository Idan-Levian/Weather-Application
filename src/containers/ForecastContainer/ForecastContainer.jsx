import React, { useEffect, useState } from 'react';
import urls from '../../config/urls';
import { openWeatherMapAPI } from '../../services/axiosService';

import CardsList from '../../components/CardsList';

const ForecastContainer = ({ lat, lon }) => {
  const [forecast, setForecast] = useState([]);

  const getWeatherForecast = async () => {
    const url = urls.weather.forecast('lat=32.08&lon=34.8'); // TODO: Change to this format : lat={lat}&lon={lon}
    try {
      const { data } = await openWeatherMapAPI.get(url);
      console.log('forecast data -> ', data);
      setForecast(data.hourly);
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getWeatherForecast();
    });
  }, []);

  return (
    <div>
      <CardsList forecast={forecast} listTitle='Forecast' />
    </div>
  );
};

export default ForecastContainer;
