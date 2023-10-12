import React from 'react';
import Navigator from './src/Process/Navigator';
import {AppProvider} from './AppContext';

const App = () => {
  return (
    <AppProvider>
      <Navigator/>
    </AppProvider>
  );
};

export default App;
