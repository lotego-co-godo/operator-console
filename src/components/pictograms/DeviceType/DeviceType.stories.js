import React from 'react';
import { DeviceType } from './DeviceType';

export default {
  title: 'Devices Table/pictograms/DeviceType',
  component: DeviceType,
};

export const Default = (args) => <DeviceType {...args} />;
Default.args = {
  type: 'Portable',
};
