import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import EmojiList from './images/views/list';
import EmojiThumbnail from './images/views/thumbnail';
import EmojiGallery from './images/views/gallery';

import CreateEmoji from './images/forms/create';
import DeleteEmoji from './images/forms/delete';

import emojiApi from '../services/emoji-api';

const views = {
  list: EmojiList,
  thumbnail: EmojiThumbnail,
  gallery: EmojiGallery,
};

export default class Images extends Component {

  constructor(props) {
    super(props);

    this.state = {
      view: 'list',
      emojis: []
    }

    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleOnSubmitCreateEmoji = this.handleOnSubmitCreateEmoji.bind(this);
    this.handleOnSubmitDeleteEmoji = this.handleOnSubmitDeleteEmoji.bind(this);
  }

  componentDidMount() {
    emojiApi.getEmojis()
      .then(res => {
        this.setState({ emojis: res });
      })
      .catch(error => console.log('uh-oh! there was an error')); // TODO: prolly add error handler
  }

  handleViewChange(view) {
    this.setState({ view });
  }

  handleOnSubmitCreateEmoji = (title, description, url) => {
    const existingEmojis = this.state.emojis;
    const newEmoji = { title: title, description: description, url: url };
    
    emojiApi.addEmoji(newEmoji)
      .then(saved => {
        this.setState({ emojis: [ ...existingEmojis, saved] });
      });
  }
  
  handleOnSubmitDeleteEmoji(id) {
    if (id !== 0) {
      const { emojis } = this.state;
      let index = emojis.findIndex(emoji => emoji._id === id);
      const newList = [...emojis.slice(0, index)].concat([...emojis.slice(++index)]);

      this.setState({ emojis: newList });
    }
  }
  
  render() {
    let selectedView = this.props.location.search.split('=')[1];
    let CurrentView = views[selectedView];
    
    return (
      <div>
        <ul>
          <li><Link to ="?view=list">list</Link></li>
          <li><Link to ="?view=thumbnail">thumbnail</Link></li>
          <li><Link to ="?view=gallery">gallery</Link></li>
        </ul>
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
