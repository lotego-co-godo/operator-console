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
  const timerSubscription = timer(0, interval).subscribe(() => {
    const radioStatusesPromise = fetchRadioStatuses();
    radioStatusesPromise.then((radioStatuses) => subscriber.next(radioStatuses));
  });

  return function unsubscribe() {
    timerSubscription.unsubscribe();
  };
});
