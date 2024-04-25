import React, { useState } from 'react';
import MarkAttendance from './components/MarkAttendance';
import Login from './Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <MarkAttendance onLogout={handleLogout} />    
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
