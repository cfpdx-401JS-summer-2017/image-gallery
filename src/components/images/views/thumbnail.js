import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EmojiThumbnail extends Component {
  
  render() {
    const { emojis } = this.props;

    return (
      <div className="thumbnail-view">
        {emojis.map((emoji, index) => (
          <div key={emoji._id} >
            <img src={emoji.url} alt={emoji.title}/>
            <p>{emoji.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

EmojiThumbnail.PropTypes = {
  emojis: PropTypes.array,
}
