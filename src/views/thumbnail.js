import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EmojiThumbnails extends Component {
  
  render() {
    const { emojis } = this.props;

    return (
      <div className="thumbnail-view">
        {emojis.map((emoji, index) => (
          <div key={index} >
            <img src={emoji.url} alt={emoji.title}/>
            <p>{emoji.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

EmojiThumbnails.PropTypes = {
  emojis: PropTypes.array,
}
