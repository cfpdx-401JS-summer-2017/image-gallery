import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  List  from './components/List';
import Gallery from './components/Gallery';
import Thumb from './components/Thumb';
import ChooseView from './components/ChooseView';
import motos from './data/motos'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list',
      motoArray: motos
    };
  }

  handleChangeView({target}) {
    console.log('target: ', target.value)
    this.setState({view: target.value})
  }

  render() {
    const {view} = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ChooseView onChangeView={target => this.handleChangeView(target)}/>
        {view === 'list' && <List motos={motos}/>}
        {view === 'gallery' && <Gallery motos={motos}/>}
        {view === 'thumb' && <Thumb motos={motos}/>}
        </div>
      </div>

    );
  }
}

export default App;
