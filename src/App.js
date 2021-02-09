import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      likes: "Likes", 
    }
    
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    this.setState({number: this.state.number + 1, likes: (this.state.number >= 1) && (this.state.number !== 0) ? "Likes" : "Like"});
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.handleIncrement()}>{this.state.likes} {this.state.number}</button>
      </React.Fragment>
    )
  }
}

export default App;
