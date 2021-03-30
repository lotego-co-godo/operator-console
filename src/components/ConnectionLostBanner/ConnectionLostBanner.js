import React from 'react';
import './ConnectionLostBanner.css';

export function ConnectionLostBanner() {
    return (
        <div className='ConnectionLostBanner'>
            <span className='content'>There was a problem while trying to update device statuses.</span>
        </div>
    );
}
