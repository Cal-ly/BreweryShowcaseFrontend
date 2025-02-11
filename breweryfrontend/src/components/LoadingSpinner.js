// src/components/LoadingSpinner.js

import React from 'react';

function LoadingSpinner() {
    return (
        <div className="d-flex justify-content-center my-5">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default LoadingSpinner;
