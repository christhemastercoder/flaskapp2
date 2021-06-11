import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';


function App2() {
  return (
    <Router>
      <AppWithRouterAccess />
    </Router>
  );
}

export default App2;
