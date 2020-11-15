import React from 'react';
import WeatherLoader from './WeatherLoader';

export default {
  title: 'Weather Loader',
  component: WeatherLoader,
};

const Template = (args) => <WeatherLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'LOOKING OUTSIDE FOR YOU... ONE SEC',
};
