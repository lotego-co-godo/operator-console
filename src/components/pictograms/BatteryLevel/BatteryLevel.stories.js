import React from 'react';
import { BatteryLevel } from './BatteryLevel';

export default {
  title: 'Devices Table/pictograms/BatteryLevel',
  component: BatteryLevel,
  argTypes: {
    level: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};

export const Default = (args) => <BatteryLevel {...args} />;
Default.args = {
  level: 100,
};
