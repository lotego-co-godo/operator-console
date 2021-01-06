import React from 'react';
import './DevicesMap.css';
import PropTypes from 'prop-types';
import { RadioStatus } from '../../radio-statuses/types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export function DevicesMap(props) {
  const { radioStatuses } = props;
  const firstDevice = radioStatuses[0];
  const firstDevicePosition = [firstDevice.Position.Lat, firstDevice.Position.Lon];

  return (
    <div className='DevicesMap'>
      <MapContainer center={firstDevicePosition} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {radioStatuses.map((device, i) => (
          <Marker position={[device.Position.Lat, device.Position.Lon]} key={i}>
            <Popup>
              Id: {device.Id} <br />
              Strength: {device.Strength} <br />
              BatteryLevel: {device.BatteryLevel}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

DevicesMap.propTypes = {
  radioStatuses: PropTypes.arrayOf(RadioStatus).isRequired,
};
