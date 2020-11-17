/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import TransparentBox from './TransparentBox';

export default {
  title: 'Box',
  component: TransparentBox,
};

const Template = (args) => <TransparentBox {...args} />;
export const Default = Template.bind({});
Default.args = {
  color: 'lightgray',
  opacity: 0.2,
};
