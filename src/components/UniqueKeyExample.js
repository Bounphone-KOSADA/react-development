import React from 'react';

function generateKey(pre) {
  return `${pre}_${new Date().getTime()}`;
}

function UniqueKeyExample() {
  const items = ['Dynamic Item 1', 'Dynamic Item 2', 'Dynamic Item 3'];
  
  return (
    <ul>
      {items.map((item) => (
        <li key={generateKey(item)}>{item}</li>
      ))}
    </ul>
  );
}

export default UniqueKeyExample;