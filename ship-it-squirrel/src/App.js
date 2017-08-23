import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmojiList from './views/list'
import EmojiThumbnail from './views/thumbnail'
import EmojiGallery from './views/gallery'
import ViewOptions from './views/options'

const views = {
  list: EmojiList,
  thumbnail: EmojiThumbnail,
  gallery: EmojiGallery,
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      view: 'list',
      emojis: [
        {
          title: 'ship it squirrel',
          description: 'GitHub\'s :shipit: emoji is a mobster squirrel used, typically in PR\'s, to communicate the code is finished and ready for production. Ship it!',
          url: 'https://qph.ec.quoracdn.net/main-qimg-c8781a4bb1f17e330b50cb35f851da05-c'
        },{
          title: 'hamburger',
          description: 'A hamburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, bacon, onion, pickles, or chiles; condiments such as mustard, mayonnaise, ketchup, relish, or "special sauce"; and are frequently placed on sesame seed buns. A hamburger topped with cheese is called a cheeseburger.',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/hamburger_1f354.png',
        },{
          title: 'unicorn',
          description: 'The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead. The unicorn was depicted in ancient seals of the Indus Valley Civilization and was mentioned by the ancient Greeks in accounts of natural history by various writers, including Ctesias, Strabo, Pliny the Younger, and Aelian.[1] The Bible also describes an animal, the re\'em, which some versions translate as unicorn.',
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
      <div className="main">
        <div>
          <h1>Christy's Image Gallery</h1>
          <ViewOptions onClick={this.handleViewChange}/>
        </div>

        <CurrentView emojis={this.state.emojis}/>

      </div>
    );
  }
}

export default App;
