import React, { Component } from 'react';
import './App.css';
import Bunnies from './images/bunnies';
import List from './list/List';
import Thumbnail from './thumbnail/Thumbnail';
import Gallery from './gallery/Gallery';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      view: 'Gallery',
      bunnies: Bunnies
    }
  }

  render() {
    const view = this.state.view;

    if( view === 'List' ) {
      return (
        <div className="App">
          <List bunnies={this.state.bunnies}/>
        </div>
      );
    }
    if( view === 'Thumbnail' ) {
      return (
        <div className="App">
            <Thumbnail bunnies={this.state.bunnies}/>
          </div>
        );
    }
    if( view === 'Gallery' ) {
      return (
        <div className="App">
            <Gallery bunnies={this.state.bunnies}/>
          </div>
        );
    }
  }
}

export default App;
