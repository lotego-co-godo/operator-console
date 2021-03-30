import React, { useState } from 'react';
import './App.css';
import { DevicesTable } from '../DevicesTable';
import { useObservable } from '../../hooks';
import { radioStatusesObservable } from '../../radio-statuses';
import { DevicesMap } from '../DevicesMap';
import { ConnectionLostBanner } from '../ConnectionLostBanner';

function App() {
  const radioStatusesUpdateResult = useObservable(radioStatusesObservable);

  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  return (
    <div className='App'>
      {radioStatusesUpdateResult?.radioStatuses ? (
        <>
          <DevicesMap
            radioStatuses={radioStatusesUpdateResult.radioStatuses}
            selectedDeviceId={selectedDeviceId}
            onDeviceSelected={setSelectedDeviceId}
          />
          <DevicesTable
            radioStatuses={radioStatusesUpdateResult.radioStatuses}
            selectedDeviceId={selectedDeviceId}
            onDeviceSelected={setSelectedDeviceId}
          />
          {!radioStatusesUpdateResult.lastFetchSuccessful ? <ConnectionLostBanner /> : undefined}
        </>
      ) : !radioStatusesUpdateResult ? (
        <div>Loading...</div>
      ) : (
        <div>Please ensure API server is running</div>
      )}
    </div>
  );
}

export default App;
