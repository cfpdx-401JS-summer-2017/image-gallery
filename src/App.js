import React, { Component } from 'react';
import './App.css';
import { bunnyBuild, plusBunny, minusBunny } from './services/bunnies';
import { List } from './Components/List';
import { Thumbs } from './Components/Thumbs';
import { Gallery } from './Components/Gallery';
import AddBunny from './Components/AddBunny';

function listView({ bunnies, onRemove }) {
  return <div><h2>List View</h2> <List listArray={ bunnies } onRemove={onRemove} /> </div>;
}
function thumbView({ bunnies, onRemove }) {
  return <div><h2>Thumbnail View</h2> <Thumbs thumbArray={ bunnies } onRemove={onRemove} /> </div>;
}
function galleryView({ bunnies, onRemove, onUpdate, bunnyNum }) {
  return <div><h2>Gallery View</h2> <Gallery galleryArray={ bunnies } bunnyNum={bunnyNum} onRemove={onRemove} onUpdate={onUpdate} /> </div>;
}

const viewDict = {
  list: listView,
  thumbs: thumbView,
  gallery: galleryView
}

const viewArray = Object.keys(viewDict);

class App extends Component {

  constructor() {
    super();
    this.state = {
      bunnies: bunnyBuild(),
      bunnyNum: 0,
      view: viewArray[0],
      views: viewArray
    };
  }

  addBunny = (title, description, url) => {
    const oldBunnies = this.state.bunnies;
    this.setState({
      bunnies: plusBunny(oldBunnies, title, description, url)
    });
  }

  removeBunny = bunny => {
    const oldBunnies = this.state.bunnies;
    this.setState({
      bunnies: minusBunny(oldBunnies, bunny)
    });
  }

  updateBunny = newNum => {
    if(newNum === this.state.bunnies.length) newNum = 0;
    if(newNum === -1) newNum = this.state.bunnies.length - 1;
    this.setState({
      bunnyNum: newNum
    })
  }

  render() {
    const { bunnies, views, view } = this.state;
    const ViewWrapper = viewDict[view];

    return (
      <main>
        <header>
          <h1>Cute Bunnies: The App</h1>
        </header>
        <nav>
          {views.map(v => (
            <button key={v} onClick={() => this.setState({ view: v })}>
              {v}
            </button>
          ))}
        </nav>
        <section>
          <ViewWrapper bunnies={ bunnies } bunnyNum={this.state.bunnyNum} onRemove={ this.removeBunny} onUpdate={this.updateBunny} />
        </section>
        <section>
          <AddBunny onAdd={this.addBunny} />
        </section>
      </main>
    );
  }
}

export default App;
