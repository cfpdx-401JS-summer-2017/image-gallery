import React, { Component } from 'react';
import {Switch, Link, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Images from './Images';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Steve Pics Dot Com!</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/images">Steve Pics</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/images" component={Images}/>
          <Redirect to="/"/>
        </Switch>
      </main>
    );
  }
}

export default App;
