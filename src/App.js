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
import Editor from './edit/Editor';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addBunny: false,
      view: 'Gallery',
      bunnies: Bunnies
    }
  }

  handleClick(name, value) {
    this.setState({
      [name]: value
    })
  }

  onAdd(bunny) {
    this.setState({
      bunnies: this.state.bunnies.push(bunny)
    })
  }



  render() {
    const view = this.state.view;

<<<<<<< HEAD
    return (
      <Router>
=======
    if (view === 'List') {
      return (
>>>>>>> cb501d1c37c47ff9f40253e53c7569ce6f7edaf5
        <div className="App">
          <button name="view" onClick={(event) => this.handleClick(event.target.name, "Thumbnail")}>
            Thumbnail
          </button>
          <button name="view" onClick={(event) => this.handleClick(event.target.name, "Gallery")}>
            Gallery
          </button>
          <Switch>
          </Switch>
          <div className="Viewer">
            <List bunnies={this.state.bunnies} />
          </div>
          <button name="addBunny" onClick={(event) => this.handleClick(event.target.name, true)}>
            Add bunny
          </button>
          {
            if(this.state.addBunny === true){
              return (
                <div>Editor would go Here</div>
              )
            }
          }
        </div>
<<<<<<< HEAD
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
=======
      );
    }
    if (view === 'Thumbnail') {
      return (
        <div className="App">
          <button name="view" onClick={(event) => this.handleClick(event.target.name, "List")}>
            List
          </button>
          <button name="view" onClick={(event) => this.handleClick(event.target.name, "Gallery")}>
            Gallery
          </button>
          <div className="Viewer">
            <Thumbnail bunnies={this.state.bunnies} />
          </div>
          <button name="addBunny" onClick={(event) => this.handleClick(event.target.name, true)}>
            Add bunny
          </button>
        </div>
      );
    }
    if (view === 'Gallery') {
      return (
        <div className="App">
          <button name="view" onClick={(event) => this.handleClick(event.target.name, "List")}>
            List
          </button>
          <button name="view" onClick={(event) => this.handleClick(event.target.name, "Thumbnail")}>
            Thumbnail
          </button>
          <div className="Viewer">
            <Gallery bunnies={this.state.bunnies} />
          </div>
          <button name="addBunny" onClick={(event) => this.handleClick(event.target.name, true)}>
            Add bunny
          </button>
        </div>
      );
    }
>>>>>>> cb501d1c37c47ff9f40253e53c7569ce6f7edaf5
  }
}

export default App;
