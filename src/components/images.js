import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ViewOptions from './images/views/options';
import EmojiList from './images/views/list';
import EmojiThumbnail from './images/views/thumbnail';
import EmojiGallery from './images/views/gallery';

import CreateEmoji from './images/forms/create';
import DeleteEmoji from './images/forms/delete';
import { createEmoji, deleteEmoji } from './images/services/emoji';
import nextId from './images/services/nextId';

const views = {
  list: EmojiList,
  thumbnail: EmojiThumbnail,
  gallery: EmojiGallery,
};

export default class Images extends Component {

  constructor(props) {
    super(props);

    this.state = {
      view: 'list', // key of the views dictionary obj
      emojis: [
        {
          id: nextId(),
          title: 'ship it squirrel',
          description: 'GitHub\'s :shipit: emoji is a mobster squirrel used, typically in PR\'s, to communicate the code is finished and ready for production. Ship it!',
          url: 'https://qph.ec.quoracdn.net/main-qimg-c8781a4bb1f17e330b50cb35f851da05-c'
        },{
          id: nextId(),
          title: 'hamburger',
          description: 'A hamburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, bacon, onion, pickles, or chiles; condiments such as mustard, mayonnaise, ketchup, relish, or "special sauce"; and are frequently placed on sesame seed buns. A hamburger topped with cheese is called a cheeseburger.',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/hamburger_1f354.png',
        },{
          id: nextId(),
          title: 'unicorn',
          description: 'The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead. The unicorn was depicted in ancient seals of the Indus Valley Civilization and was mentioned by the ancient Greeks in accounts of natural history by various writers, including Ctesias, Strabo, Pliny the Younger, and Aelian. The Bible also describes an animal, the re\'em, which some versions translate as unicorn.',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/unicorn-face_1f984.png',
        },{
          id: nextId(),
          title: 'fire',
          description: 'Fire is the rapid oxidation of a material in the exothermic chemical process of combustion, releasing heat, light, and various reaction products. Slower oxidative processes like rusting or digestion are not included by this definition.',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/fire_1f525.png'
        },{
          id: nextId(),
          title: 'alien',
          description: 'Extraterrestrial life, also called alien life (or, if it is a sentient or relatively complex individual, an "extraterrestrial" or "alien"), is life that does not originate from Earth. These hypothetical life forms may range from simple single-celled organisms to beings with civilizations far more advanced than humanity. Although many scientists expect extraterrestrial life to exist in some form, there is no evidence for its existence to date. The Drake equation speculates about the existence of intelligent life elsewhere in the universe. The science of extraterrestrial life in all its forms is known as exobiology.',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/alien-monster_1f47e.png'
        },{
          id: nextId(),
          title: 'nerd',
          description: 'A nerd is a person seen as overly intellectual, obsessive, or lacking social skills. Such a person may spend inordinate amounts of time on unpopular, little known, or non-mainstream activities, which are generally either highly technical, abstract, or relating to topics of fiction or fantasy, to the exclusion of more mainstream activities. Additionally, many so-called nerds are described as being shy, quirky, pedantic, and unattractive, and may have difficulty participating in, or even following, sports.',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/nerd-face_1f913.png'
        },{
          id: nextId(),
          title: 'floppy disk',
          description: 'A floppy disk, also called a floppy, diskette, or just disk, is a type of disk storage composed of a disk of thin and flexible magnetic storage medium, sealed in a rectangular plastic enclosure lined with fabric that removes dust particles. Floppy disks are read and written by a floppy disk drive (FDD).',
          url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/floppy-disk_1f4be.png'
        }
      ]
    }
    console.log('starter data', this.state.emojis);

    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleOnSubmitCreateEmoji = this.handleOnSubmitCreateEmoji.bind(this);
    this.handleOnSubmitDeleteEmoji = this.handleOnSubmitDeleteEmoji.bind(this);
  }

  handleViewChange(view) {
    this.setState({ view });
  }

  handleOnSubmitCreateEmoji = (title, description, url) => {
    let emojis = createEmoji(this.state.emojis, title, description, url);
    this.setState({ emojis });
  }
  
  handleOnSubmitDeleteEmoji(id) {
    if (id !== 0) {
      let emojis = deleteEmoji(this.state.emojis, id);
      this.setState({ emojis });
    }
  }

  render() {
    let CurrentView = views[this.state.view];
    
    return (
      <div>
        <ViewOptions onClick={this.handleViewChange} />
        <CurrentView emojis={this.state.emojis} />
        <CreateEmoji handleOnSubmit={this.handleOnSubmitCreateEmoji} />
        <DeleteEmoji emojis={this.state.emojis} handleOnSubmit={this.handleOnSubmitDeleteEmoji} />
      </div>
    );
  }

}

Images.propTypes = {
  view: PropTypes.string,
  emojis: PropTypes.array,
}
