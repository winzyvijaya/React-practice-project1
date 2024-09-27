
import React from 'react';
// Sibling B Component
const ComponentB = ({ receivedData }) => {
    return (
      <div>
        <h2>Sibling B</h2>
        <p>Received Data: {receivedData}</p>
      </div>
    );
  };
  export default ComponentB;