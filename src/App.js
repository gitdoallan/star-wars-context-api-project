import React from 'react';
import Routes from './routes';
import GeneralProvider from './contexts/GeneralProvider';

function App() {
  return (
    <GeneralProvider>
      <Routes />
    </GeneralProvider>
  );
}

export default App;
