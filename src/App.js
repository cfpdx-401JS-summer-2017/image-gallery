import React, { Component } from 'react';
import logo from './cb750.svg';
import './App.css';
import View from '../src/components/views/View';
import Detail from './components/views/Detail';
import Home from '../src/components/static/Home';
import About from '../src/components/static/About';
import { populateDB, DeleteImage } from './services/imageService';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
require('dotenv').config();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      imageArray: []
    };
  }

  async componentDidMount() {
    const { view } = this.state;
    const initImages = await populateDB();
    this.setState({ imageArray: initImages, view: 'gallery' });
  }

  handleChangeView(target) {
    console.log(target)
    this.setState({ view: target.view });
  }

  deleteImage({ target }) {
    const { imageArray } = this.state;
    let imagesAfterDelete = DeleteImage(imageArray, target.i);
    this.setState({ imageArray: imagesAfterDelete });
  }

  updateSlide(target) {

  }
  getImagesFromParent = () => {
    return this.state.imageArray;
  }

  render() {
    const { view, imageArray } = this.state;
    const {match, location} = this.props;
    console.log('in app: ', imageArray, match, location )
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span>
              I like to take photos of motorcycles I see, especially classic
              Hondas.
            </span>
            <div className="navLinks">
              <span>
                <NavLink to={{ pathname: '/' }}>Home</NavLink>
              </span>{' '}
              <span>
                <NavLink  to={{ pathname: '/images', search: `${view}`, imagesFromParent:`${this.getImagesFromParent}` }}>
                  Images
                </NavLink>
              </span>{' '}
              <span>
                <NavLink to={{ pathname: '/about' }}>About</NavLink>
              </span>
            </div>
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact render={() => (
                  <View
                    deleteImage={target => this.deleteImage({ target })}
                    onChangeView={target => this.handleChangeView(target)}
                    view={view}
                    imageArray={imageArray}
                    match={match}
                    location={location}
                    imagesFromParent={this.getImagesFromParent}
                  />
                )}
              />
              <Route path="/images/detail/" component={Detail} />
              <Route path="/about" component={About} /> />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
