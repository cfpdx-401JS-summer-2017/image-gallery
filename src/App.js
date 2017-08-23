import React, { Component } from 'react';
import './App.css';
import { bunnyBuild } from './services/bunnies';
import { List } from './Components/List';

class App extends Component {

  constructor() {
    super();
    this.state = {
      bunnies: bunnyBuild()
    };
  }

  render() {
    const { bunnies } = this.state;

    return (
      <div className="App">
        <List listArray={bunnies} />


      </div>
    );
  }
}

export default App;
