import PropTypes from 'prop-types';

export const positionType = PropTypes.shape({
  Lat: PropTypes.string,
  Lon: PropTypes.string,
});

export const radioStatusType = PropTypes.shape({
  Id: PropTypes.number,
  Name: PropTypes.string,
  Type: PropTypes.oneOf(['Portable', 'Car', 'BaseStation']),
  SerialNumber: PropTypes.string,
  Strength: PropTypes.number,
  BatteryLevel: PropTypes.number,
  WorkingMode: PropTypes.oneOf(['Voice', 'Data', 'Idle']),
  Position: positionType,
});
