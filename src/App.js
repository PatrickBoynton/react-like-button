import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    }
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <button>Like<span className="plural">s</span> <span className="increment">0</span></button>
      </React.Fragment>
    )
  }
}

export default App;
