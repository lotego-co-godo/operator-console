import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export function DeviceType({ type }) {
  return (
    <div className='DeviceType pictogram'>
      <FontAwesomeIcon icon={type === 'Portable' ? faMobileAlt : type === 'Car' ? faCar : faHome} size='2x' />
    </div>
  );
}

DeviceType.propTypes = {
  type: PropTypes.oneOf(['Portable', 'Car', 'BaseStation']).isRequired,
};
