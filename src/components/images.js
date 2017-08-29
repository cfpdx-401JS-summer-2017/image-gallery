import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import EmojiList from './images/views/list';
import EmojiThumbnail from './images/views/thumbnail';
import EmojiGallery from './images/views/gallery';

import CreateEmoji from './images/forms/create';
import DeleteEmoji from './images/forms/delete';
import { createEmoji, deleteEmoji } from '../services/emoji';
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
      view: 'list', // key of the views dictionary obj
      emojis: []
    }

    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleOnSubmitCreateEmoji = this.handleOnSubmitCreateEmoji.bind(this);
    this.handleOnSubmitDeleteEmoji = this.handleOnSubmitDeleteEmoji.bind(this);
  }

  componentDidMount() {
    emojiApi.getImages()
      // .then(res => res.json())
      .then(res => {
        console.log('emojiApi.getImages() returns', res.body);
        this.setState({ emojis: res.body });
      })
      .catch(error => console.log('uh-oh! there was an error'));
  }

  handleViewChange(view) {
    this.setState({ view });
  }

  handleOnSubmitCreateEmoji = (title, description, url) => {
    //TODO: still working on this
    let emojis = createEmoji(this.state.emojis, title, description, url);

    const newImg = { title: title, description: description, url: url };
    
    emojiApi.addImage(newImg);

    this.setState({ emojis });

  }
  
  handleOnSubmitDeleteEmoji(id) {
    if (id !== 0) {
      let emojis = deleteEmoji(this.state.emojis, id);
      this.setState({ emojis });
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
