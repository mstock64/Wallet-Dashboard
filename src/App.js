import './App.css';
import WalletHub from './Wallet Components/WalletHub';
import React from 'react';
import WalletSubmits from './Wallet Components/WalletSubmits';
import WalletDashboard from './Wallet Components/WalletDashboard';
let items = []
let addr = ''

function App() {
  
  return (
    <div class='bg-gray-900'>
      <WalletHub />
      <WalletDashboard />
    </div>
  );
}

export default App;
