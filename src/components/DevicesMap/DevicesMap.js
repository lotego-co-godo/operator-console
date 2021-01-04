import React from 'react';
import './DevicesMap.css';
import PropTypes from 'prop-types';
import { RadioStatus } from '../../radio-statuses/types';

export function DevicesMap(props) {
  const { radioStatuses } = props;
  const firstDevice = radioStatuses[0];

  return (
    <div className='DevicesMap'>
      <div>
        Urządzenie:
        <br />
        Id: {firstDevice.Id}
        <br />
        Name: {firstDevice.Name}
        <br />
        Type: {firstDevice.Type}
        <br />
        Strength: {firstDevice.Strength}
        <br />
        BatteryLevel: {firstDevice.BatteryLevel}
      </div>
    </div>
  );
}

DevicesMap.propTypes = {
  radioStatuses: PropTypes.arrayOf(RadioStatus).isRequired,
};
