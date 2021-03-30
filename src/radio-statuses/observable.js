import {Observable} from 'rxjs';

import {timer} from 'rxjs';
import {fetchRadioStatuses} from './fetch';
import {refreshRateInSeconds} from './refresh-rate';

const interval = refreshRateInSeconds * 1000;

export const radioStatusesObservable = new Observable((subscriber) => {
    let last = null;

    const timerSubscription = timer(0, interval).subscribe(() => {
        const radioStatusesPromise = fetchRadioStatuses();
        radioStatusesPromise.then((radioStatuses) => {
            subscriber.next({radioStatuses, lastFetchSuccessful: true})
            last = radioStatuses
        }).catch(() => subscriber.next({radioStatuses: last, lastFetchSuccessful: false}));
    });

    return function unsubscribe() {
        timerSubscription.unsubscribe();
    };
});
