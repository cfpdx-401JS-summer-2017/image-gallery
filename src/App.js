import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Navigation from './Navigation';
import Home from './components/home';
import About from './components/about';
import Images from './components/images';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <div>
            <h1>emoji-wiki-pedia</h1>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/images">Images</Link></li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/images" component={Images} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
