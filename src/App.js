import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Navigation from './Navigation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <Router>
        <div className="App">
          <h2>This is a vanilla React App</h2>
          <Navigation />
        </div>
      </Router>
    );

  }
}

export default App;
