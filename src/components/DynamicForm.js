import React, { useState } from 'react';

function DynamicForm() {
  const [inputs, setInputs] = useState(['']);

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <input
          key={index}
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
      <button onClick={addInput}>Add Input</button>
    </div>
  );
}

export default DynamicForm;