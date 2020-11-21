/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import WeatherCard from './';

export default {
  title: 'Weather Card',
  component: WeatherCard,
};

const Template = (args) => <WeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
