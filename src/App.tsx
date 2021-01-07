import React from 'react';
import { Button } from '@osui/ui';
import './App.less';

function App() {
  return (
    <div className="App">
        <Button
          type="primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Button>
    </div>
  );
}

export default App;
