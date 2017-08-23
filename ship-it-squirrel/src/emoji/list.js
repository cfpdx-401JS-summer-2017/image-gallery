import React, { Component } from 'react';

export default class EmojiList extends Component {
  
  render() {
    const { emojis } = this.props;

    return (
      <div>
        {emojis.map((emoji, index) => (
          <div key={index} >
            <h2>{emoji.title}</h2>
            <p>{emoji.description}</p>
            <img src={emoji.url} />
          </div>
        ))}
      </div>
    );

  }

}