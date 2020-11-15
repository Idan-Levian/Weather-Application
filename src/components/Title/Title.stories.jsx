/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Title from './Title';

export default {
  title: 'Header',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  city: 'Tel Aviv',
  country: 'IL',
};
