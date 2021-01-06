import React from 'react';
import { DevicesTable } from './DevicesTable';

export default {
  title: 'Devices Table',
  component: DevicesTable,
};

export const Default = (args) => <DevicesTable {...args} />;
Default.args = {
  radioStatuses: [
    {
      Id: 1,
      Name: 'KR 1',
      Type: 'BaseStation',
      SerialNumber: '6080-0414-7591-00001',
      Strength: 10,
      BatteryLevel: 100,
      WorkingMode: 'Voice',
      Position: { Lat: '50.062', Lon: '19.906' },
    },
    {
      Id: 2,
      Name: 'KR 2',
      Type: 'BaseStation',
      SerialNumber: '6080-0414-7591-00001',
      Strength: 99,
      BatteryLevel: 50,
      WorkingMode: 'Voice',
      Position: { Lat: '25.133', Lon: '50.530' },
    },
  ],
};
