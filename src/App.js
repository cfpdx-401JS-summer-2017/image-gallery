import React, { Component } from 'react';
import './App.css';
import Bunnies from './images/bunnies';
import Viewer from './viewer/Viewer';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import Editor from './edit/Editor';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addBunny: false,
      view: 'Gallery',
      bunnies: Bunnies
    }
  }

  handleClick(name, value) {
    this.setState({
      [name]: value
    })
  }

  onAdd(bunny) {
    this.setState({
      bunnies: this.state.bunnies.push(bunny)
    })
  }



  render() {
    const view = this.state.view;

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path = "/" component={Viewer}/>
          </Switch>
          <button name="addBunny" onClick={(event) => this.handleClick(event.target.name, true)}>
            Add bunny
          </button>
        </div>
      </Router>
    );

  }
}

export default App;
