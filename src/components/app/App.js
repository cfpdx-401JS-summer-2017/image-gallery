import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from '../../routes/Home';
import About from '../../routes/About';
import { Images } from '../../routes/Images';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     bunnies: bunnyBuild(),
  //     bunnyNum: 0
  //   };
  // }

  // addBunny = (title, description, url) => {
  //   const oldBunnies = this.state.bunnies;
  //   this.setState({
  //     bunnies: plusBunny(oldBunnies, title, description, url)
  //   });
  // }

  // removeBunny = bunny => {
  //   const oldBunnies = this.state.bunnies;
  //   this.setState({
  //     bunnies: minusBunny(oldBunnies, bunny)
  //   });
  // }

  // updateBunny = newNum => {
  //   if (newNum === this.state.bunnies.length) newNum = 0;
  //   if (newNum === -1) newNum = this.state.bunnies.length - 1;
  //   this.setState({
  //     bunnyNum: newNum
  //   });
  // }
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>Cute Bunnies: The App</h1>
            <Nav />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/images" component={Images} />
              <Route path="/about" component={About} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

