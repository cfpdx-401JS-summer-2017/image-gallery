import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List  from './components/List';
import Gallery from './components/Gallery';
import Thumb from './components/Thumb';
import ChooseView from './components/ChooseView';
import hondas from './data/hondas'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'gallery',
      motoArray: hondas
    };
  }

  handleChangeView({target}) {
    console.log('target: ', target.value)
    this.setState({view: target.value})
  }

  render() {
    const {view, motoArray} = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <div>
          <ChooseView onChangeView={target => this.handleChangeView(target)}/>
        {view === 'list' && <List hondas={motoArray}/>}
        {view === 'gallery' && <Gallery hondas={motoArray}/>}
        {view === 'thumb' && <Thumb hondas={motoArray}/>}
        </div>
      </div>

    );
  }
}

export default App;
