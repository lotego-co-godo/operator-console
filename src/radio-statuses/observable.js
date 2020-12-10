// used in jsdoc
// eslint-disable-next-line no-unused-vars
import { Observable } from 'rxjs';

import { timer } from 'rxjs';
import { fetchRadioStatuses } from './fetch';
import { refreshRateInSeconds } from './refresh-rate';

const interval = refreshRateInSeconds * 1000;

/**
 * @type {Observable<RadioStatus[]>}
 */
export const radioStatusesObservable = new Observable((subscriber) => {
  const timerSubscription = timer(0, interval).subscribe(() => {
    const radioStatusesPromise = fetchRadioStatuses();
    radioStatusesPromise.then((radioStatuses) => subscriber.next(radioStatuses));
  });

  return function unsubscribe() {
    timerSubscription.unsubscribe();
  };
});
