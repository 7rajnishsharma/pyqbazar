import React from 'react';

export default function Spinner() {
  return (
    <>
      <div className="loader-container">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <circle
            className="spin"
            cx="400"
            cy="400"
            fill="none"
            r="214"
            strokeWidth="49" // Updated from stroke-width to strokeWidth
            stroke="#808080"
            strokeDasharray="845 1400" // Updated from stroke-dasharray to strokeDasharray
            strokeLinecap="round" // Updated from stroke-linecap to strokeLinecap
          />
        </svg>
      </div>
    </>
  );
}
