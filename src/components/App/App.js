import React from 'react';
import './App.css';
import { DevicesTable } from '../DevicesTable';
import { useObservable } from '../../hooks';
import { radioStatusesObservable } from '../../radio-statuses';

function App() {
  const radioStatuses = useObservable(radioStatusesObservable);

  return (
    <div className='App'>{radioStatuses ? <DevicesTable radioStatuses={radioStatuses} /> : <div>Loading...</div>}</div>
  );
}

export default App;
