import React from 'react';

function ArgumentButton() {
  const handleClick = (id, e) => {
    console.log(`Button ${id} was clicked!`);
  };

  return (
    <div>
      <button onClick={(e) => handleClick(1, e)}>Button 1</button>
      <button onClick={(e) => handleClick(2, e)}>Button 2</button>
    </div>
  );
}

export default ArgumentButton;