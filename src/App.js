import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Gallery from './components/Gallery';
import Thumb from './components/Thumb';
import View from './components/View';
import ChooseView from './components/ChooseView';
import AddImage from './components/AddImage';
import hondas from './data/hondas';
import {
  DefaultImages,
  AddNewImage,
  DeleteImage
} from './services/imageService';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends PureComponent {
  constructor() {
    super();
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
    console.log('change: ', target)
    this.setState({ view: target.currentView });
  }

  addImage = (title, desc, url) => {
    const { motoArray } = this.state;
    AddNewImage(title, desc, url, motoArray);
    this.setState({ motoArray: hondas });
  };

  deleteImage(target) {
    console.log('in delete: ', target);
    const { motoArray } = this.state;
    DeleteImage(motoArray, target);
    this.setState({ motoArray: hondas });
  }

  updateSlide(target) {
    // console.log('in this.updateSlide: ', target)
    // this.setState({ imgIndex: target });
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
          </div>
          <div>
            <div className="functionsHeader">
              <ChooseView
                view={view}
                onChangeView={target => this.handleChangeView(target)}
              />
              <AddImage onSubmitImage={this.addImage} />
            </div>
            <Route
              path="/view"
              render={(match) => <View
              hondas={motoArray}
              deleteImage={target => this.deleteImage(target)}
              match={match}
              />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
