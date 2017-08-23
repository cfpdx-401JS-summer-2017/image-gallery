import React, { Component } from 'react';

export default class EmojiThumbnails extends Component {
  
  render() {
    const { emojis } = this.props;

    return (
      <div className="thumbnail-view">
        {emojis.map((emoji, index) => (
          <div key={index} >
            <img src={emoji.url} width="100px" height="100px"/>
            <p>{emoji.title}</p>
          </div>
        ))}
      </div>
    );

  }

}
