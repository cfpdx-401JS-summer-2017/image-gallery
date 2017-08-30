import React, { Component } from 'react';
import './App.css';
import Bunnies from './images/bunnies';
import List from './list/List';
import Thumbnail from './thumbnail/Thumbnail';
import Gallery from './gallery/Gallery';
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

  onAdd = (bunny) => {
    console.log('bunny is', bunny);
    this.setState((prevState, props) => { 

      const bunniesArray = prevState.bunnies;

      console.log('prevState.bunnies is', prevState.bunnies);

      bunniesArray.push(bunny);

      return { bunnies: bunniesArray }; 
    })
  }

  toggleAddForm(){
    this.setState({
      addBunny: !this.state.addBunny
    })
  }

  render() {
    const view = this.state.view;

    if (view === 'List') {
      return (
        <div className="App">
          <button name="view" onClick={(event) => this.handleClick(event.target.name, "Thumbnail")}>
            Thumbnail
          </button>
          <button name="view" onClick={(event) => this.handleClick(event.target.name, "Gallery")}>
            Gallery
          </button>
          <div className="Viewer">
            <List bunnies={this.state.bunnies} />
          </div>
          <button name="addBunny" onClick={(event) => this.handleClick(event.target.name, true)}>
            Add bunny
          </button>
          <Editor addBunny={this.state.addBunny} onSave={this.onAdd}/>
        </div>
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
          <Editor addBunny={this.state.addBunny} onSave={this.onAdd}/>
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
          <button name="addBunny" onClick={(event) => this.toggleAddForm()}>
            Add bunny
          </button>
          <Editor addBunny={this.state.addBunny} onSave={this.onAdd}/>
        </div>
      );
    }
  }
}

export default App;
