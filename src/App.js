import React, { Component } from 'react';
import stevens from './images/Stevens';
import StevenList from './StevenList';
import './App.css';

function StevenDetail({steven}) {
  return <div>Steven Detail {steven}</div>;
}
function StevenThumbnail({steven}) {
  return <div>Steven Thumbnail {steven}</div>
}
function StevenGallery({steven}) {
  return <div>Steven Gallery {steven}</div>;
}

const View = {
  Detail: StevenDetail,
  Thumbnail: StevenThumbnail,
  Gallery: StevenGallery
}

const views = Object.keys(View);

class App extends Component {

  constructor() {
    super();
    this.state = {
      steven: stevens,
      view: views[0],
      views: views
    }
  }

  render() {
    const {steven, views, view} = this.state;
    const StevenView = View[view];

    return (
      <main>
        <div className="App">
          <header className="App-header">
            <h1>Steve Pics Dot Com</h1>
          </header>
          <section>
            {views.map(v => (
              <button key={v} onClick={() => this.setState({view: v})}>
                {v}
              </button>
            ))}
          <StevenView steven={steven}/>
          </section>
          <section>
            <StevenList steven={steven}/>
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
