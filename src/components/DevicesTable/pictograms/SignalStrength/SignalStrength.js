import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal } from '@fortawesome/free-solid-svg-icons';

// todo
// eslint-disable-next-line
export function SignalStrength({ strength }) {
  return (
    <div className='SignalStrength pictogram'>
      <FontAwesomeIcon icon={faSignal} size='2x' />
    </div>
  );
}

SignalStrength.propTypes = {
  strength: PropTypes.number.isRequired,
};
