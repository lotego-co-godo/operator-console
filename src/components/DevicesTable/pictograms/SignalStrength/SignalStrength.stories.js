import React from 'react';
import { SignalStrength } from './SignalStrength';

export default {
  title: 'Devices Table/pictograms/SignalStrength',
  component: SignalStrength,
  argTypes: {
    strength: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
  },
};

export const Default = (args) => <SignalStrength {...args} />;
Default.args = {
  strength: 100,
};
