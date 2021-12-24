import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const number: number = 0;
  const [number, setNumber] = useState<number | string>(5);
  // const [number, setNumber] = useState<number>(5);
  // const [number, setNumber] = useState<any>(5);

  const changeNumber = () => {
    setNumber(3)
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div onClick={changeNumber}>{number}</div>
      </header>
    </div>
  );
}

export default App;
