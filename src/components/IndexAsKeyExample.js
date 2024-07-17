import React from 'react';

function IndexAsKeyExample() {
  const items = ['Item A', 'Item B', 'Item C'];
  
  return (
    <div>
      <h2>Not Recommended (using index as key):</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndexAsKeyExample;