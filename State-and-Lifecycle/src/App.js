import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock className="clock" />
        <Clock className="clock" />
        <Clock className="clock" />
      </div>
    );
  }
}

export default App;
