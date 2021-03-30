import React from 'react';
import './DeviceMarker.css';
import PropTypes from 'prop-types';
import { DeviceType } from '../../pictograms/DeviceType';

export function DeviceMarker({ type, health, onClick, selected, distance }) {
  let healthLevel;

  if (health >= 90) {
    healthLevel = 6;
  } else if (health <= 89 && health >= 70) {
    healthLevel = 5;
  } else if (health <= 69 && health >= 50) {
    healthLevel = 4;
  } else if (health <= 49 && health >= 30) {
    healthLevel = 3;
  } else if (health <= 29 && health >= 10) {
    healthLevel = 2;
  } else {
    healthLevel = 1;
  }

  return (
    <div
      className={`DeviceMarker health${healthLevel} ${selected ? 'selected' : ''} ${distance ? 'distanceShown' : ''}`}
      onClick={onClick}
    >
      <DeviceType type={type} />
      {distance ? <div className={`distance`}>{distance?.toFixed()} m</div> : undefined}
    </div>
  );
}

DeviceMarker.propTypes = {
  type: PropTypes.oneOf(['Portable', 'Car', 'BaseStation']).isRequired,
  health: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool.isRequired,
  distance: PropTypes.number,
};
