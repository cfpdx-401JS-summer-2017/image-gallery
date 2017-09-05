
import React, { Component } from 'react';
import logo from './cb750.svg';
import './App.css';
import View from '../src/components/views/View';
import Home from '../src/components/static/Home';
import About from '../src/components/static/About';
import { populateDB, DeleteImage, AddNewImage } from './services/imageService';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
const superagent = require('superagent');
require('dotenv').config();
const apiURL = process.env.REACT_APP_API_URL;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      imageArray: []
    };
  }

  async componentDidMount() {
    const initImages = await populateDB();
    this.setState({ imageArray: initImages});
  }

  handleChangeView(target) {
    this.setState({ view: target.currentView });
  }

  deleteImage({ target }) {
    const { imageArray } = this.state;
    let imagesAfterDelete = DeleteImage(imageArray, target.i);
    this.setState({ imageArray: imagesAfterDelete });
  }


  async addImage( {title, desc, url}) {

    const newPhoto = {
       "title": title,
       "url": url,
       "alt": 'alt text',
       "description": desc
     }
    const addedImage = await AddNewImage(newPhoto);
    console.log('added: ', addedImage );
    // const { imageArray } = this.state;
    // let imagesAfterDelete = DeleteImage(imageArray, target.i);
    // this.setState({ imageArray: imagesAfterDelete });
  }

  updateSlide(target) {

  }
  getImagesFromParent = () => {
    return {imageArray: this.state.imageArray, view: this.state.view};
  }

  render() {
    const { view, imageArray} = this.state;

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
                    addImage={image => this.addImage(image)}
                    view={view}
                    images={imageArray}
                  />
                )}
              />
              <Route path="/about" component={About} /> />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
