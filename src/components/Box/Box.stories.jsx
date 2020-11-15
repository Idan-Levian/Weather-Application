import React from 'react';
import Loader from '../Loader/Loader';
import Box from './Box';

export default {
  title: 'Box',
  component: Box,
};

const Template = (args) => <Box {...args} />;
export const Default = Template.bind({});
Default.args = {
  color: 'lightgray',
  opacity: 0.2,
};
