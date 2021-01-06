import React from 'react';
import PropTypes from 'prop-types';
import './SignalStrength.css';

import signalFull from './icons/signal-full.svg';
import signal4Bars from './icons/signal-4-bars.svg';
import signal3Bars from './icons/signal-3-bars.svg';
import signal2Bars from './icons/signal-2-bars.svg';
import signal1Bar from './icons/signal-1-bar.svg';
import signalEmpty from './icons/signal-empty.svg';

export function SignalStrength({ strength }) {
  return (
    <div className='SignalStrength pictogram'>
      <img
        alt='signal-strength'
        src={
          strength === 10
            ? signalFull
            : strength > 6
            ? signal4Bars
            : strength > 4
            ? signal3Bars
            : strength > 2
            ? signal2Bars
            : strength > 0
            ? signal1Bar
            : signalEmpty
        }
      />
    </div>
  );
}

SignalStrength.propTypes = {
  strength: PropTypes.number.isRequired,
};
