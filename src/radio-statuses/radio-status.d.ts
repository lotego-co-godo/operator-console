export type Position = {
  Lat: string;
  Lon: string;
};

export type RadioStatus = {
  Id: number;
  Name: string;
  Type: 'Portable' | 'Car' | 'BaseStation';
  SerialNumber: string;
  Strength: number;
  BatteryLevel: number;
  WorkingMode: 'Voice' | 'Data' | 'Idle';
  Position: Position;
};