import React from 'react';

function SyntheticEventExample() {
  const handleClick = (e) => {
    console.log('Synthetic Event Type:', e.type);
    console.log('Native Event Type:', e.nativeEvent.type);
  };

  return <button onClick={handleClick}>Click for Event Info</button>;
}

export default SyntheticEventExample;