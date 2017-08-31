import React, { Component } from 'react';
import logo from './cb750.svg';
import './App.css';
import View from '../src/components/views/View';
import Detail from './components/views/Detail';
import Home from '../src/components/static/Home';
import About from '../src/components/static/About';
import hondas from './data/hondas';
import { DefaultImages, DeleteImage } from './services/imageService';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motoArray: hondas,
      view: 'gallery'
    };
  }

  componentDidMount() {
    const { motoArray, view } = this.state;
    DefaultImages(motoArray);
    this.setState({ view: view });
  }

  handleChangeView(target) {
    this.setState({ view: target.currentView });
  }

  deleteImage({ target }) {
    const { motoArray } = this.state;
    let imagesAfterDelete = DeleteImage(motoArray, target.i);
    this.setState({ motoArray: imagesAfterDelete });
  }

  updateSlide(target) {
    // console.log('in this.updateSlide: ', target) this.setState({ imgIndex: target
    // });
  }

  render() {
    const { motoArray, view } = this.state;

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
                <Link to={{ pathname: '/' }}>Home</Link>
              </span>{' '}
              <span>
                <Link to={{ pathname: '/images', search: `${view}` }}>
                  Images
                </Link>
              </span>{' '}
              <span>
                <Link to={{ pathname: '/about' }}>About</Link>
              </span>
            </div>
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/images"
                render={() => (
                  <View
                    hondas={motoArray}
                    deleteImage={target => this.deleteImage({ target })}
                    onChangeView={target => this.handleChangeView(target)}
                    view={view}
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
