import './App.css';
import WalletItem from './WalletItem';
import WalletSubmit from './WalletSubmit';
import WalletHub from './WalletHub';

function App() {
  return (
    <div>
      <WalletHub/>
      <WalletSubmit/>
      <WalletItem/>
    </div>
  );
}

export default App;
