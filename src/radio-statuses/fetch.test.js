import axios from 'axios';
import { fetchRadioStatuses } from './fetch';

jest.mock('axios');

describe('fetchRadioStatuses()', () => {
  it('should return correct radio status', async () => {
    axios.get.mockReturnValue(
      Promise.resolve({
        data: [
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
        ],
      })
    );

    const radioStatuses = await fetchRadioStatuses();
    expect(radioStatuses).toStrictEqual([
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
    ]);
  });
});
