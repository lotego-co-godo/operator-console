import PropTypes from 'prop-types';
import React from 'react';
import { Observable } from 'rxjs';
import { DevicesMap } from '../DevicesMap';
import { useObservable } from '../../../hooks';

export function LiveDevicesMap(props) {
  const { radioStatusesObservable } = props;
  const radioStatuses = useObservable(radioStatusesObservable);

  return (
    <div className='LiveDevicesMap'>
      {radioStatuses ? <DevicesMap radioStatuses={radioStatuses} /> : <div>Loading...</div>}
    </div>
  );
}

LiveDevicesMap.propTypes = {
  radioStatusesObservable: PropTypes.instanceOf(Observable).isRequired,
};
