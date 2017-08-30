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
      bunnies: Bunnies,
      current: 0
    }
  }

  handleClick(name, value) {
    this.setState({
      [name]: value
    })
  }

  cycleView = (value) => {
    const thisImgIndex = this.state.current;
    
    if( value === "Previous" ) {
        if( thisImgIndex > 0) {
            this.setState({
                current: thisImgIndex - 1
            })
        } else {
            this.setState({
                current: this.state.bunnies.length - 1
            })
        }
    } else {
        if( thisImgIndex === (this.state.bunnies.length - 1)) {
            this.setState({
                current: 0
            })
        } else {
            this.setState({
                current: thisImgIndex + 1
            })
        }
    }
  }

  onAdd = (bunny) => {
    this.setState((prevState, props) => { 

      const bunniesArray = prevState.bunnies;
      bunniesArray.push(bunny);

      return { bunnies: bunniesArray }; 
    })
  }

  onRemove = () => {
    this.setState((prevState, props) => {
      const index = this.state.current;
      const bunniesArray = prevState.bunnies;
      const newBunnies = [
        ...bunniesArray.slice(0, index),
        ...bunniesArray.slice(index + 1)
      ]
      const newIndex = index === 0 ? 0 : index - 1;

      return { bunnies: newBunnies, current: newIndex };
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
          <button name="addBunny" onClick={(event) => this.toggleAddForm()}>
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
          <button name="addBunny" onClick={(event) => this.toggleAddForm()}>
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
            <Gallery 
              bunnies={this.state.bunnies} 
              onDeleteBunny={this.onRemove} 
              current={this.state.current}
              cycleView={this.cycleView}
              />
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
