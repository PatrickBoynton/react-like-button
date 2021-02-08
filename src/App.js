import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button>Like<span className="plural">s</span> <span className="increment">0</span></button>
      </React.Fragment>
    )
  }
}

export default App;
