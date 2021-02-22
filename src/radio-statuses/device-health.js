export function getDeviceHealth(device) {
  return (device.Strength * 10 + device.BatteryLevel) / 2;
}
