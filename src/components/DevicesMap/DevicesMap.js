import React from 'react';
import './DevicesMap.css';
import PropTypes from 'prop-types';
import { RadioStatus } from '../../radio-statuses/types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import carIcon from './icons/car-solid.svg';
import homeIcon from './icons/home-solid.svg';
import phoneIcon from './icons/mobile-alt-solid.svg';

export function DevicesMap(props) {
  const { radioStatuses } = props;

  return (
    <div className='DevicesMap'>
      <MapContainer center={[50.038, 19.955]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {radioStatuses.map((device, i) => (
          <Marker position={[device.Position.Lat, device.Position.Lon]} key={i} icon={getIcon(device.Type)}>
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

function getIcon(deviceType) {
  return new L.Icon({
    iconUrl: deviceType === 'Portable' ? phoneIcon : deviceType === 'Car' ? carIcon : homeIcon,
    iconSize: [35, 40],
  });
}

DevicesMap.propTypes = {
  radioStatuses: PropTypes.arrayOf(RadioStatus).isRequired,
};
