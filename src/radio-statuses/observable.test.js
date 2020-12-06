import { fetchRadioStatuses } from './fetch';
import { radioStatusesObservable } from './observable';
import { sleep } from '../sleep';

jest.mock('./fetch', () => ({
  fetchRadioStatuses: jest.fn(),
}));

const refreshRateInSeconds = 0.1;
const refreshRateInMilliseconds = refreshRateInSeconds * 1000;

jest.mock('./refresh-rate', () => ({
  refreshRateInSeconds: refreshRateInSeconds,
}));

describe('radioStatusesObservable', () => {
  it('should call fetchRadioStatuses() instantly after subscribing', async () => {
    fetchRadioStatuses.mockReturnValue(
      Promise.resolve([
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
      ])
    );

    radioStatusesObservable.subscribe(() => '');

    const veryShortTime = 1;
    await sleep(veryShortTime);

    expect(fetchRadioStatuses).toBeCalled();
  });

  it('should call fetchRadioStatuses() each {refreshRateInSeconds} seconds when subscribed', async () => {
    fetchRadioStatuses.mockReturnValue(
      Promise.resolve([
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
      ])
    );

    radioStatusesObservable.subscribe(() => '');

    for (let i = 0; i < 3; i++) {
      const someExtraTime = 10;
      await sleep(refreshRateInMilliseconds + someExtraTime);

      const initialCall = 1;
      expect(fetchRadioStatuses).toBeCalledTimes(i + 1 + initialCall);
    }
  });

  it('should push statuses instantly after subscribing when there are no network delays', async () => {
    fetchRadioStatuses.mockReturnValue(
      Promise.resolve([
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
      ])
    );

    let radioStatuses;
    radioStatusesObservable.subscribe((statuses) => (radioStatuses = statuses));

    const veryShortTime = 1;
    await sleep(veryShortTime);

    // the test will fail if undefined
    // noinspection JSUnusedAssignment
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

  it('should push new statuses each {refreshRateInSeconds} seconds when subscribed and there are no network delays', async () => {
    fetchRadioStatuses.mockReturnValue(
      Promise.resolve([
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
      ])
    );

    let mostRecentStatuses;
    radioStatusesObservable.subscribe((statuses) => (mostRecentStatuses = statuses));

    for (let i = 0; i < 3; i++) {
      fetchRadioStatuses.mockReturnValue(
        Promise.resolve([
          {
            Id: 1,
            Name: 'KR 1',
            Type: 'BaseStation',
            SerialNumber: '6080-0414-7591-00001',
            Strength: i,
            BatteryLevel: 100,
            WorkingMode: 'Voice',
            Position: { Lat: '50.062', Lon: '19.906' },
          },
        ])
      );

      const someExtraTime = 10;
      await sleep(refreshRateInMilliseconds + someExtraTime);

      // the test will fail if undefined
      // noinspection JSUnusedAssignment
      expect(mostRecentStatuses[0].Strength).toBe(i);
    }
  });

  it('should not call fetchRadioStatuses() anymore when unsubscribed', async () => {
    fetchRadioStatuses.mockReturnValue(
      Promise.resolve([
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
      ])
    );

    const subscription = radioStatusesObservable.subscribe(() => '');

    const veryShortTime = 1;
    await sleep(veryShortTime);

    await subscription.unsubscribe();

    const someExtraTime = 10;
    await sleep(refreshRateInMilliseconds + someExtraTime);

    expect(fetchRadioStatuses).toBeCalledTimes(1);
  });
});
