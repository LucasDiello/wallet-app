import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <Route exact path="/" component={ Login } />

    </div>
  );
}

export default App;
