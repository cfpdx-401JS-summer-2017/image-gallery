import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmojiList from './emoji/list'
import { DetailView, ThumbnailView, GalleryView, Options } from './emoji/views';


const views = {
  details: DetailView,
  thumbnail: ThumbnailView,
  gallery: GalleryView
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      view: 'details',
      emojis: [
        {
          title: 'ship it squirrel',
          description: '',
          url: 'https://github.com/github/gemoji/blob/master/images/shipit.png?raw=true'
        },{
          title: 'hamburger',
          description: '',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/hamburger_1f354.png',
        },{
          title: 'unicorn',
          description: '',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/unicorn-face_1f984.png',
        }
      ]
    }

    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange(view) {
    this.setState({ view });
  }

  render() {
    let CurrentView = views[this.state.view];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Options onClick={this.handleViewChange}/>
        <CurrentView />
        <EmojiList emojis={this.state.emojis} />

      </div>
    );
  }
}

export default App;
