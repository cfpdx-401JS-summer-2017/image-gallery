import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
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
            <ul id="menu">
              <li><Link to="/home"><img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/google/110/house-building_1f3e0.png" />Home</Link></li>
              <li><Link to="/about"><img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/google/110/thinking-face_1f914.png" />About</Link></li>
              <li><Link to="/images"><img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/google/110/frame-with-picture_1f5bc.png" />Images</Link></li>
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
