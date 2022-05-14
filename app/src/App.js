import logo from './logo.svg';
import './App.css';
import { SendMessageBlock } from './components/SendMessageBlock';
import { Stack, Typography } from '@mui/material';
import { HeaderTitle } from './components/HeaderTitle';

function App() {
  return (
    <div className="App">
      <Stack direction="column" spacing={8}>
        <HeaderTitle/>
        <SendMessageBlock/>
      </Stack>
    </div>
  );
}

export default App;
