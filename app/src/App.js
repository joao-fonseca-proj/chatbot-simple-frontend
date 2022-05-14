import logo from './logo.svg';
import './App.css';
import { HeaderTitle } from './components/HeaderTitle';
import { SendMessageBlock } from './components/SendMessageBlock';

function App() {
  return (
    <div className="App">
      <HeaderTitle/>
      <SendMessageBlock/>
    </div>
  );
}

export default App;
