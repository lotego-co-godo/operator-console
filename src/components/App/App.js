import React, { useState } from 'react';
import './App.css';
import { DevicesTable } from '../DevicesTable';
import { useObservable } from '../../hooks';
import { radioStatusesObservable } from '../../radio-statuses';
import { DevicesMap } from '../DevicesMap';

function App() {
  const radioStatuses = useObservable(radioStatusesObservable);

  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  return (
    <div className='App'>
      {radioStatuses ? (
        <>
          <DevicesMap
            radioStatuses={radioStatuses}
            selectedDeviceId={selectedDeviceId}
            onDeviceSelected={setSelectedDeviceId}
          />
          <DevicesTable
            radioStatuses={radioStatuses}
            selectedDeviceId={selectedDeviceId}
            onDeviceSelected={setSelectedDeviceId}
          />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
