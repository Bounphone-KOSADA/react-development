import React, { useState } from 'react';

function LogicalAndExample() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
      {showMessage && <p>This message is conditionally rendered!</p>}
    </div>
  );
}

export default LogicalAndExample;