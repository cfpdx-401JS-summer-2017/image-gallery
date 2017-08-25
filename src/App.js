import React, { Component } from 'react';
import './App.css';
import Bunnies from './images/bunnies';
import List from './list/List';
import Thumbnail from './thumbnail/Thumbnail';
import Gallery from './gallery/Gallery';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom';

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

  onAdd(bunny){
    this.setState({
      bunnies: this.state.bunnies.push(bunny)
    })
  }



  render() {
    const view = this.state.view;

    return (
      <Router>
        <div className="App">
          <button onClick={(event) => this.handleClick("Thumbnail")}>
            Thumbnail
          </button>
          <button onClick={(event) => this.handleClick("Gallery")}>
            Gallery
          </button>
          <Switch>
          </Switch>
          <div className="Viewer">
            <List bunnies={this.state.bunnies}/>
          </div>
        </div>
      </Router>
    );
    // if( view === 'Thumbnail' ) {
    //   return (
    //     <div className="App">
    //       <button onClick={(event) => this.handleClick("List")}>
    //         List
    //       </button>
    //       <button onClick={(event) => this.handleClick("Gallery")}>
    //         Gallery
    //       </button>
    //       <div className="Viewer">
    //         <Thumbnail bunnies={this.state.bunnies}/>
    //       </div>
    //     </div>
    //     );
    // }
    // if( view === 'Gallery' ) {
    //   return (
    //     <div className="App">
    //       <button onClick={(event) => this.handleClick("List")}>
    //         List
    //       </button>
    //       <button onClick={(event) => this.handleClick("Thumbnail")}>
    //         Thumbnail
    //       </button>
    //       <div className="Viewer">
    //         <Gallery bunnies={this.state.bunnies}/>
    //       </div>
    //     </div>
    //     );
    // }
  }
}

export default App;
