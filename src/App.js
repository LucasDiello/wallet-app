import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </div>
  );
}

export default App;
