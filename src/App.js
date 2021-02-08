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
  handleIncrement() {
    this.setState({number: this.state.number += 1});
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.handleIncrement()}>{this.state.number}</button>
      </React.Fragment>
    )
  }
}

export default App;
