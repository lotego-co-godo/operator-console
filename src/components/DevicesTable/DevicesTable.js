import React from 'react';
import './DevicesTable.css';
import PropTypes from 'prop-types';
import { RadioStatus } from '../../radio-statuses/types';
import { DataGrid } from '@material-ui/data-grid';
import { DeviceType } from './pictograms/DeviceType';
import { SignalStrength } from './pictograms/SignalStrength';
import { BatteryLevel } from './pictograms/BatteryLevel';

const defaultPageSize = 5;

export function DevicesTable({ radioStatuses }) {
  const columns = [
    { field: 'Id', sortable: false, width: 50 },
    { field: 'Name', sortable: false, width: 85 },

    // eslint-disable-next-line react/prop-types,react/display-name
    { field: 'Type', sortable: false, width: 70, renderCell: ({ value }) => <DeviceType type={value} /> },
    { field: 'SerialNumber', sortable: false, width: 200 },

    // eslint-disable-next-line react/prop-types,react/display-name
    { field: 'Strength', sortable: false, width: 90, renderCell: ({ value }) => <SignalStrength strength={value} /> },

    // eslint-disable-next-line react/prop-types,react/display-name
    { field: 'BatteryLevel', sortable: false, width: 120, renderCell: ({ value }) => <BatteryLevel level={value} /> },
    { field: 'WorkingMode', sortable: false, width: 125 },
  ];

  const rows = radioStatuses.map((radioStatus) => ({ id: radioStatus.Id, Position: undefined, ...radioStatus }));

  // some DataGrid bug
  // noinspection RequiredAttributes
  return (
    <div className='DevicesTable'>
      <DataGrid columns={columns} rows={rows} pageSize={defaultPageSize} disableSelectionOnClick disableColumnMenu />
    </div>
  );
}

DevicesTable.propTypes = {
  radioStatuses: PropTypes.arrayOf(RadioStatus).isRequired,
};
