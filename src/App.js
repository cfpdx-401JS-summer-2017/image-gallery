import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import List  from './components/List';
import Gallery from './components/Gallery';
import Thumb from './components/Thumb';
import ChooseView from './components/ChooseView';
import hondas from './data/hondas'
import { DefaultImages, AddImages, DeleteImage } from './services/imageService';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      view: 'thumb',
      motoArray: hondas
        };
  }

  handleChangeView(target) {
    this.setState({view: target.currentView})
  }

  deleteImage(target) {
    console.log('in delete: ', target);
    DeleteImage(this.state.motoArray, target)
  }

  render() {
    const {view, motoArray} = this.state;
    const View = view === 'list' ? List : view === 'gallery' ? Gallery : Thumb
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <div>
          <ChooseView view={view} onChangeView={target => this.handleChangeView(target)}/>
        <View hondas={motoArray} deleteImage={target => this.deleteImage(target)}/>
        </div>
      </div>

    );
  }
}

export default App;
