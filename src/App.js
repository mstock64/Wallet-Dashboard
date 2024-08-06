import './App.css';
import WalletHub from './Wallet Components/WalletHub';
import React from 'react';
import WalletSubmit from './Wallet Components/WalletSubmit';
let items = []
let addr = ''

function App() {
  
  return (
    <div class='bg-gray-900'>
      <WalletHub />
      <WalletSubmit />
    </div>
  );
}

export default App;
