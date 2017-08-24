import React, { Component } from 'react';

export default class EmojiList extends Component {
  
  render() {
    const { emojis } = this.props;

    return (
      <div className="list-view">
        {emojis.map((emoji, index) => (
          <div key={index} >
            <h2>{emoji.title}</h2>
            <img src={emoji.url} alt={emoji.title}/>
            <p>{emoji.description}</p>
          </div>
        ))}
      </div>
    );

  }

}
