/* eslint-disable import/no-anonymous-default-export */
export default {
  weather: {
    base: 'http://api.openweathermap.org/data/2.5',
    forecast: (query) =>
      `/forecast/climate?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    current: (query) =>
      `/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
  },
};
