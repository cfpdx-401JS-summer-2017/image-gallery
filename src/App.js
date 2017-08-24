import React, { Component } from 'react';
import './App.css';
import EmojiList from './views/list';
import EmojiThumbnail from './views/thumbnail';
import EmojiGallery from './views/gallery';
import ViewOptions from './views/options';
import CreateEmoji from './forms/create';
import DeleteEmoji from './forms/delete';
import { create } from './services/emoji';

// dictionary
const views = {
  list: EmojiList,
  thumbnail: EmojiThumbnail,
  gallery: EmojiGallery,
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      view: 'list', // key of the views dictionary obj
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
          description: 'The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead. The unicorn was depicted in ancient seals of the Indus Valley Civilization and was mentioned by the ancient Greeks in accounts of natural history by various writers, including Ctesias, Strabo, Pliny the Younger, and Aelian. The Bible also describes an animal, the re\'em, which some versions translate as unicorn.',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/unicorn-face_1f984.png',
        },{
          title: 'fire',
          description: 'Fire is the rapid oxidation of a material in the exothermic chemical process of combustion, releasing heat, light, and various reaction products. Slower oxidative processes like rusting or digestion are not included by this definition.',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/fire_1f525.png'
        },{
          title: 'alien',
          description: 'Extraterrestrial life, also called alien life (or, if it is a sentient or relatively complex individual, an "extraterrestrial" or "alien"), is life that does not originate from Earth. These hypothetical life forms may range from simple single-celled organisms to beings with civilizations far more advanced than humanity. Although many scientists expect extraterrestrial life to exist in some form, there is no evidence for its existence to date. The Drake equation speculates about the existence of intelligent life elsewhere in the universe. The science of extraterrestrial life in all its forms is known as exobiology.',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/alien-monster_1f47e.png'
        },{
          title: 'nerd',
          description: 'A nerd is a person seen as overly intellectual, obsessive, or lacking social skills. Such a person may spend inordinate amounts of time on unpopular, little known, or non-mainstream activities, which are generally either highly technical, abstract, or relating to topics of fiction or fantasy, to the exclusion of more mainstream activities. Additionally, many so-called nerds are described as being shy, quirky, pedantic, and unattractive, and may have difficulty participating in, or even following, sports.',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/nerd-face_1f913.png'
        },{
          title: 'floppy disk',
          description: 'A floppy disk, also called a floppy, diskette, or just disk, is a type of disk storage composed of a disk of thin and flexible magnetic storage medium, sealed in a rectangular plastic enclosure lined with fabric that removes dust particles. Floppy disks are read and written by a floppy disk drive (FDD).',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/floppy-disk_1f4be.png'
        }
      ]
    }

    this.handleViewChange = this.handleViewChange.bind(this);
    // this.handleOnSubmitCreateEmoji = this.handleOnSubmitCreateEmoji.bind(this);
    // this.handleOnSubmitDeleteEmoji = this.handleOnSubmitDeleteEmoji.bind(this);
  }

  handleViewChange(view) {
    this.setState({ view });
  }

  create = (title, description, url) => {
    this.setState({ emojis: create(this.state.emojis, {title, description, url}) });
  }
  
  handleOnSubmitDeleteEmoji(index) {
    // const index = todos.indexOf(todo);
    // if (index === -1) return todos;
  
    // return [
    //   ...todos.slice(0, index),
    //   ...todos.slice(index + 1)
    // ]
  

    if (index !== 'none') {
      // this.setState({ emojis: this.state.emojis.splice(index, 1) });
      this.setState({ ...this.state.emojis });
    }
  }

  render() {

    let CurrentView = views[this.state.view];

    return (
      <div className="main">
        <div>
          <h1>emoji-wiki-pedia</h1>
          <p>a mashup of <a href="https://emojipedia.org/">emojipedia</a> and <a href="https://en.wikipedia.org/">Wikipedia</a>.</p>
          
          <ViewOptions onClick={this.handleViewChange} />
        </div>
        <div>
          <CurrentView emojis={this.state.emojis} />
          <CreateEmoji handleOnSubmit={this.create} />
          <DeleteEmoji emojis={this.state.emojis} handleOnSubmit={this.handleOnSubmitDeleteEmoji} />
        </div>
      </div>
    );
  }
}

export default App;
