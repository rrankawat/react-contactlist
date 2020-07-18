import React from 'react';
import Routes from './routes/Routes';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Routes />
      </AlertState>
    </AuthState>
  );
};

export default App;
