import React from 'react';
import logo from './logo.svg';
import './App.css';
import Experience from './Experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jonathan Pelletier</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <p>
          Hello. This is the self introduction page for Jonathan Pelletier. Nothing is here yet. Please look forward to it.
        </p>
        <span role="img" aria-label="bow">
          🙇‍♂️
        </span>
      </div>
      <div className="App-content-spacer"></div>
      <Experience />
    </div>
  );
}

export default App;

