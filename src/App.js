import React, { Component } from 'react';
import StevePics from './images/Stevens';
import StevenList from './StevenList';
import StevenThumbnail from './StevenThumbnail'
import './App.css';

function Detail({stevens}) {
  return <div>Steven Detail {stevens.length}</div>;
}
function Thumbnail({stevens}) {
  return <div>Steven Thumbnail {stevens.length}</div>
}
function StevenGallery({stevens}) {
  return <div>Steven Gallery {stevens.length}</div>;
}

const View = {
  Detail: StevenList,
  Thumbnail: StevenThumbnail,
  Gallery: StevenGallery
}

const views = Object.keys(View);

class App extends Component {

  constructor() {
    super();
    this.state = {
      stevens: StevePics,
      view: views[0],
      views: views
    }
  }

  render() {
    const {stevens, views, view} = this.state;
    const StevenView = View[view];
    console.log(StevenView);

    return (
      <main>
        <div className="App">
          <header className="App-header">
            <h1>Steve Pics Dot Com</h1>
          </header>
          <section>
            <StevenView stevens={stevens}/>
          </section>
          <section>
            {views.map(v => (
              <button key={v} onClick={() => this.setState({view: v})}>
                {v}
              </button>
            ))}
          </section>
          <p className="App-intro">
            Thank you for looking at my pictures of Steven.
          </p>
        </div>
      </main>
    );
  }
}

export default App;
