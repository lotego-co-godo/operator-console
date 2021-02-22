import React, { useEffect, useState } from 'react';
import './DevicesMap.css';
import PropTypes from 'prop-types';
import { RadioStatus } from '../../radio-statuses/types';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { getDeviceHealth } from '../../radio-statuses/device-health';
import * as ReactDom from 'react-dom';
import { DeviceMarker } from './DeviceMarker';

export function DevicesMap({ radioStatuses, onDeviceSelected, selectedDeviceId }) {
  const [deviceIcons, setDeviceIcons] = useState({});

  useEffect(() => {
    const newIcons = {};
    radioStatuses.forEach((device) => {
      const existingIcon = deviceIcons[device.Id];
      const icon = existingIcon
        ? existingIcon
        : getIcon(device.Type, getDeviceHealth(device), device.Id, onDeviceSelected);
      newIcons[device.Id] = icon;
      const element = icon.options.html;
      const selectedDevice = radioStatuses.find((radio) => radio.Id === selectedDeviceId);
      const distanceToSelectedDevice = selectedDevice
        ? L.latLng(device.Position.Lat, device.Position.Lon).distanceTo(
            L.latLng(selectedDevice.Position.Lat, selectedDevice.Position.Lon)
          )
        : undefined;
      ReactDom.render(
        <DeviceMarker
          type={device.Type}
          health={getDeviceHealth(device)}
          onClick={() => onDeviceSelected(device.Id)}
          selected={selectedDevice === device}
          distance={selectedDevice !== device ? distanceToSelectedDevice : undefined}
        />,
        element
      );
    });
    setDeviceIcons(newIcons);
  }, [radioStatuses, selectedDeviceId]);

  return (
    <div className='DevicesMap'>
      <MapContainer center={[50.038, 19.955]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {radioStatuses.map((device, i) => (
          <Marker position={[device.Position.Lat, device.Position.Lon]} key={i} icon={deviceIcons[device.Id]} />
        ))}
      </MapContainer>
    </div>
  );
}

function getIcon() {
  const iconElement = document.createElement('div');
  return L.divIcon({
    html: iconElement,
    iconSize: [40, 40],
  });
}

DevicesMap.propTypes = {
  radioStatuses: PropTypes.arrayOf(RadioStatus).isRequired,
  selectedDeviceId: PropTypes.number,
  onDeviceSelected: PropTypes.func.isRequired,
};
