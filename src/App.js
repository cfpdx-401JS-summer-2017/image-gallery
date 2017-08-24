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

  handleClick(value){
    this.setState({
      view: value
    })
  }

  render() {
    const view = this.state.view;

      if( view === 'List' ) {
      return (
        <div className="App">
          <button onClick={(event) => this.handleClick("Thumbnail")}>
            Thumbnail
          </button>
          <button onClick={(event) => this.handleClick("Gallery")}>
            Gallery
          </button>
          <div className="Viewer">
            <List bunnies={this.state.bunnies}/>
          </div>
        </div>
      );
    }
    if( view === 'Thumbnail' ) {
      return (
        <div className="App">
          <button onClick={(event) => this.handleClick("List")}>
            List
          </button>
          <button onClick={(event) => this.handleClick("Gallery")}>
            Gallery
          </button>
          <div className="Viewer">
            <Thumbnail bunnies={this.state.bunnies}/>
          </div>
        </div>
        );
    }
    if( view === 'Gallery' ) {
      return (
        <div className="App">
          <button onClick={(event) => this.handleClick("List")}>
            List
          </button>
          <button onClick={(event) => this.handleClick("Thumbnail")}>
            Thumbnail
          </button>
          <div className="Viewer">
            <Gallery bunnies={this.state.bunnies}/>
          </div>
        </div>
        );
    }
  }
}

export default App;
