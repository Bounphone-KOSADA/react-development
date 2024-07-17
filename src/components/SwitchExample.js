import React, { useState } from 'react';

function SwitchExample() {
  const [userType, setUserType] = useState('guest');

  const renderUserContent = () => {
    switch(userType) {
      case 'admin':
        return <h2>Welcome, Admin!</h2>;
      case 'user':
        return <h2>Welcome, User!</h2>;
      default:
        return <h2>Welcome, Guest!</h2>;
    }
  };

  return (
    <div>
      {renderUserContent()}
      <button onClick={() => setUserType('admin')}>Set Admin</button>
      <button onClick={() => setUserType('user')}>Set User</button>
      <button onClick={() => setUserType('guest')}>Set Guest</button>
    </div>
  );
}

export default SwitchExample;