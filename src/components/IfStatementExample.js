import  { useState } from 'react';

function IfStatementExample() {
  const [temperature, setTemperature] = useState(25);

  let message;
  if (temperature > 30) {
    message = "It's hot!";
  } else if (temperature > 20) {
    message = "It's warm.";
  } else {
    message = "It's cool.";
  }

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setTemperature(temperature + 5)}>
        Increase Temperature
      </button>
    </div>
  );
}

export default IfStatementExample;