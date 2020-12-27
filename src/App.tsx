import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Car style={{ height: "200px" }} moveBody clouds moveWheels moveY />
      </header>
    </div>
  );
}

export default App;
