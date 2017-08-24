import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Gallery from './components/Gallery';
import Thumb from './components/Thumb';
import ChooseView from './components/ChooseView';
import AddImage from './components/AddImage';
import hondas from './data/hondas';
import { DefaultImages, AddNewImage, DeleteImage } from './services/imageService';

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
    console.log('changeView: ', target.currentView);
    this.setState({ view: target.currentView });
  }

  addImage(target) {
    console.log('addImage: ', typeof target, target);
    const { motoArray } = this.state;
    AddNewImage(motoArray, target);
  }

  deleteImage(target) {
    console.log('in delete: ', target);
    const { motoArray } = this.state;
    DeleteImage(motoArray, target);
  }

  render() {
    const { motoArray, view } = this.state;
    const View = view === 'list' ? List : view === 'gallery' ? Gallery : Thumb;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>I like to take photos of motorcycles I see, especially classic Hondas.</span>
        </div>
        <div>
          <ChooseView
            view={view}
            onChangeView={target => this.handleChangeView(target)}
          />
          <View
            hondas={motoArray}
            deleteImage={target => this.deleteImage(target)}
          />
        </div>
      </div>
    );
  }
}

export default App;
