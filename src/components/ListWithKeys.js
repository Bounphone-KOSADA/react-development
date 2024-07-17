import React from 'react';

function ListWithKeys() {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}

export default ListWithKeys;