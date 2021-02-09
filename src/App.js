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
    // Non shorthand: this.setState((state) => ({likes: state.likes + 1}))
    this.setState((state) => ({number: state.number + 1}))
  }

  render() {
    return (
      <React.Fragment>
        {/* Testing */}
        <button onClick={() => this.handleIncrement()}>{this.state.number} {this.state.number === 1 ? "like" : "likes"}</button>
      </React.Fragment>
    )
  }
}

export default App;
