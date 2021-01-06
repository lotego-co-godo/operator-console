import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBatteryFull,
  faBatteryThreeQuarters,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryEmpty,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export function BatteryLevel({ level }) {
  return (
    <div className='BatteryLevel pictogram'>
      <FontAwesomeIcon
        icon={
          level === 100
            ? faBatteryFull
            : level > 50
            ? faBatteryThreeQuarters
            : level > 25
            ? faBatteryHalf
            : level > 0
            ? faBatteryQuarter
            : faBatteryEmpty
        }
        size='2x'
      />
    </div>
  );
}

BatteryLevel.propTypes = {
  level: PropTypes.number.isRequired,
};
