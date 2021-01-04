import React from 'react';
import { LiveDevicesMap } from './LiveDevicesMap';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

export default {
  title: 'Devices Map/Live',
  component: LiveDevicesMap,
};

export const Default = (args) => <LiveDevicesMap {...args} />;
Default.args = {
  radioStatusesObservable: timer(0, 1000).pipe(
    map((i) => [
      {
        Id: 1,
        Name: 'KR 1',
        Type: 'BaseStation',
        SerialNumber: '6080-0414-7591-00001',
        Strength: 10 + i * 2,
        BatteryLevel: 100 - i,
        WorkingMode: 'Voice',
        Position: { Lat: '50.062', Lon: '19.906' },
      },
      {
        Id: 2,
        Name: 'KR 2',
        Type: 'BaseStation',
        SerialNumber: '6080-0414-7591-00001',
        Strength: 99,
        BatteryLevel: 50 - i,
        WorkingMode: 'Voice',
        Position: { Lat: '25.133', Lon: '50.530' },
      },
    ])
  ),
};
