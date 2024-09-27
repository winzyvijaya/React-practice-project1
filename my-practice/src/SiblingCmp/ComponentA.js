import React, { useState } from 'react';

// Sibling A Component
const ComponentA = ({ sendData }) => {
  const [data, setData] = useState('');

  const handleChange = (e) => {
    const newData = e.target.value;
    setData(newData);
    sendData(newData); // Pass data to the parent component
  };

  return (
    <div>
      <h2>Sibling A</h2>
      <input type="text" value={data} onChange={handleChange} />
    </div>
  );
};
export default ComponentA;