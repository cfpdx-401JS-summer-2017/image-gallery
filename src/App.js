import React, { Component } from 'react';
import './App.css';
import { bunnyBuild } from './services/bunnies';
import { List } from './Components/List';
import { Thumbs } from './Components/Thumbs';
import { Gallery } from './Components/Gallery';

function listView({ bunnies }) {
  return <div><h2>List View</h2> <List listArray={ bunnies } /> </div>;
}
function thumbView({ bunnies }) {
  return <div><h2>Thumbnail View</h2> <Thumbs thumbArray={ bunnies } /> </div>;
}
function galleryView({ bunnies }) {
  return <div><h2>Gallery View</h2> <Gallery galleryArray={ bunnies } /> </div>;
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
      view: viewArray[0],
      views: viewArray
    };
  }

  render() {
    const { bunnies, views, view } = this.state;
    const ViewWrapper = viewDict[view];

    return (
      <main>
        <header>
          <h1>Cute Bunnies App</h1>
        </header>
        <section>
          {views.map(v => (
            <button key={v} onClick={() => this.setState({ view: v })}>
              {v}
            </button>
          ))}
        </section>
        <section>
          <ViewWrapper bunnies={ bunnies } />
        </section>
      </main>
    );
  }
}

export default App;
