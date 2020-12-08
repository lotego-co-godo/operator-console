// used in jsdoc
// eslint-disable-next-line no-unused-vars
import { Observable } from 'rxjs';
import { fetchRadioStatuses } from './fetch';
import { refreshRateInSeconds } from './refresh-rate';

/**
 * @type {Observable<RadioStatus[]>}
 */

const interval = refreshRateInSeconds * 1000;
export const radioStatusesObservable = new Observable(function subscribe(subscriber) {
  const radioStatusesPromise = fetchRadioStatuses();
  radioStatusesPromise.then((radioStatuses) => subscriber.next(radioStatuses));
  const intervalId = setInterval(() => {
    const radioStatusesPromise = fetchRadioStatuses();
    radioStatusesPromise.then((radioStatuses) => subscriber.next(radioStatuses));
  }, interval);

  return function unsubscribe() {
    clearInterval(intervalId);
  };
});
