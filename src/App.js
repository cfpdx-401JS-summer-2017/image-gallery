import React, { Component } from 'react';
import logo from './cb750.svg';
import './App.css';
import View from '../src/components/views/View';
import Home from '../src/components/static/Home';
import About from '../src/components/static/About';
import { populateDB, DeleteImage, AddNewImage } from './services/imageService';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      images: []
    };
  }

  async componentDidMount() {
    const initImages = await populateDB();
    this.setState({ images: initImages });
  }

  handleChangeView(target) {
    this.setState({ view: target.currentView });
  }

  async deleteImage(image) {
    const { _id } = image;
    const { images } = this.state;
    const del = await DeleteImage(_id);
    if (del.status !== 200) return;
    let newImages = [];
    images.map(ele => {
      if (ele._id !== _id) newImages.push(ele);
      return newImages;
    });
    this.setState({ images: newImages });
  }

  async addImage({ title, desc, url }) {
    const newPhoto = {
      title: title,
      url: url,
      alt: 'alt text',
      description: desc
    };
    const addedImage = await AddNewImage(newPhoto);
    const { images } = this.state;
    images.push(addedImage.text);
    this.setState({ images: images });
  }

  updateSlide(target) {}

  render() {
    const { view, images } = this.state;

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
                <NavLink
                  to={{
                    pathname: '/images',
                    search: `${view}`,
                    imagesFromParent: `${this.getImagesFromParent}`
                  }}>
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
                exact
                render={() => (
                  <View
                    deleteImage={image => this.deleteImage(image)}
                    onChangeView={target => this.handleChangeView(target)}
                    addImage={image => this.addImage(image)}
                    view={view}
                    images={images}
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
