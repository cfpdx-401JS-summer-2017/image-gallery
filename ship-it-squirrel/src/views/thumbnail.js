import React, { Component } from 'react';

export default class EmojiThumbnails extends Component {
  
  render() {
    const { emojis } = this.props;

    return (
      <div className="thumbnail-view">
        {emojis.map((emoji, index) => (
          <div key={index} >
            <img src={emoji.url} width="50px" height="50px" alt={emoji.title}/>
            <p>{emoji.title}</p>
          </div>
        ))}
      </div>
    );

  }

}
