import React from 'react';
import './DevicesMap.css';
import PropTypes from 'prop-types';
import { RadioStatus } from '../../radio-statuses/types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import carDarkGreenIcon from './icons/car-solid-dark-green.svg';
import carDarkOrangeIcon from './icons/car-solid-dark-orange.svg';
import carLightGreenIcon from './icons/car-solid-light-green.svg';
import carLightOrangeIcon from './icons/car-solid-light-orange.svg';
import carRedIcon from './icons/car-solid-red.svg';
import carYellowIcon from './icons/car-solid-yellow.svg'; 
import homeDarkGreenIcon from './icons/home-solid-dark-green.svg';
import homeDarkOrangeIcon from './icons/home-solid-dark-orange.svg';
import homeLightGreenIcon from './icons/home-solid-light-green.svg';
import homeLightOrangeIcon from './icons/home-solid-light-orange.svg';
import homeRedIcon from './icons/home-solid-red.svg';
import homeYellowIcon from './icons/home-solid-yellow.svg';
import phoneDarkGreenIcon from './icons/mobile-alt-solid-dark-green.svg';
import phoneDarkOrangeIcon from './icons/mobile-alt-solid-dark-orange.svg';
import phoneLightGreenIcon from './icons/mobile-alt-solid-light-green.svg';
import phoneLightOrangeIcon from './icons/mobile-alt-solid-light-orange.svg';
import phoneRedIcon from './icons/mobile-alt-solid-red.svg';
import phoneYellowIcon from './icons/mobile-alt-solid-red.svg';


export function DevicesMap(props) {
  const { radioStatuses } = props;

  return (
    <div className='DevicesMap'>
      <MapContainer center={[50.038, 19.955]} zoom={12} scrollWheelZoom={false}>
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

function DevicesHealth(device){
  let deviceHealth = ((device.Strength*10 + device.BatteryLevel)/200);
}

function getIcon(deviceType, deviceHealth){
  let deviceColor;
  return new L.Icon({
    iconUrl: 
    if(deviceType === 'Portable'){
      if(deviceHealth>=90){
        deviceColor = phoneDarkGreenIcon;
      }else if((deviceHealth<=89)&&(deviceHealth>=70)){
        deviceColor = phoneLightGreenIcon;
      }else if((deviceHealth<=69)&&(deviceHealth>=50)){
        deviceColor = phoneYellowIcon;
      }else if((deviceHealth<=49)&&(deviceHealth>=30)){
        deviceColor = phoneLightOrangeIcon;
      }else if((deviceHealth<=29)&&(deviceHealth>=10)){
        deviceColor = phoneDarkOrangeIcon;
      }else{
        deviceColor = phoneRedIcon;
      }
    }else if(deviceType === 'Car'){
      if(deviceHealth>=90){
        deviceColor = carDarkGreenIcon;
      }else if((deviceHealth<=89)&&(deviceHealth>=70)){
        deviceColor = carLightGreenIcon;
      }else if((deviceHealth<=69)&&(deviceHealth>=50)){
        deviceColor = carYellowIcon;
      }else if((deviceHealth<=49)&&(deviceHealth>=30)){
        deviceColor = carLightOrangeIcon;
      }else if((deviceHealth<=29)&&(deviceHealth>=10)){
        deviceColor = carDarkOrangeIcon;
      }else{
        deviceColor = carRedIcon;
      }
    }else{
      if(deviceHealth>=90){
        deviceColor = homeDarkGreenIcon;
      }else if((deviceHealth<=89)&&(deviceHealth>=70)){
        deviceColor = homeLightGreenIcon;
      }else if((deviceHealth<=69)&&(deviceHealth>=50)){
        deviceColor = homeYellowIcon;
      }else if((deviceHealth<=49)&&(deviceHealth>=30)){
        deviceColor = homeLightOrangeIcon;
      }else if((deviceHealth<=29)&&(deviceHealth>=10)){
        deviceColor = homeDarkOrangeIcon;
      }else{
        deviceColor = homeRedIcon;
      }
    },
    iconSize: [35, 40],
  });
}

DevicesMap.propTypes = {
  radioStatuses: PropTypes.arrayOf(RadioStatus).isRequired,
};
