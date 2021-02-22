import React from 'react';
import './DevicesTable.css';
import PropTypes from 'prop-types';
import { RadioStatus } from '../../radio-statuses/types';
import { DataGrid } from '@material-ui/data-grid';
import { DeviceType } from './pictograms/DeviceType';
import { SignalStrength } from './pictograms/SignalStrength';
import { BatteryLevel } from './pictograms/BatteryLevel';

const defaultPageSize = 5;

export function DevicesTable({ radioStatuses, selectedDeviceId, onDeviceSelected }) {
  const columns = [
    { field: 'Id', width: 70 },
    { field: 'Name', width: 100 },

    // eslint-disable-next-line react/prop-types,react/display-name
    { field: 'Type', width: 90, renderCell: ({ value }) => <DeviceType type={value} /> },
    { field: 'SerialNumber', sortable: false, width: 200 },

    // eslint-disable-next-line react/prop-types,react/display-name
    { field: 'Strength', width: 115, renderCell: ({ value }) => <SignalStrength strength={value} /> },

    // eslint-disable-next-line react/prop-types,react/display-name
    { field: 'BatteryLevel', width: 140, renderCell: ({ value }) => <BatteryLevel level={value} /> },
    { field: 'WorkingMode', width: 145 },
  ];

  const rows = radioStatuses.map((radioStatus) => ({ id: radioStatus.Id, Position: undefined, ...radioStatus }));

  // some DataGrid bug
  // noinspection RequiredAttributes
  return (
    <div className='DevicesTable'>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={defaultPageSize}
        disableColumnMenu
        selectionModel={selectedDeviceId ? [+selectedDeviceId] : []}
        onSelectionModelChange={(newSelection) => onDeviceSelected(newSelection.selectionModel[0])}
      />
    </div>
  );
}

DevicesTable.propTypes = {
  radioStatuses: PropTypes.arrayOf(RadioStatus).isRequired,
  selectedDeviceId: PropTypes.string,
  onDeviceSelected: PropTypes.func.isRequired,
};
