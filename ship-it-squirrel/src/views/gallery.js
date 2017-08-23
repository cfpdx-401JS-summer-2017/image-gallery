import React, { Component } from 'react';

export default class EmojiGallery extends Component {

  constructor(props) {
    super(props);

    this.state = {
      emojis: this.props.emojis,
      emojiIndex: 0
    }

    this.scroll = this.scroll.bind(this);
  }

  scroll(int) {
    const max = this.state.emojis.length - 1;
    const currIndex = this.state.emojiIndex;
    let newIndex = this.state.emojiIndex + int;

    if (currIndex === max && int === 1) newIndex = 0;
    if (currIndex === 0 && int === -1) newIndex = max;

    this.setState({ emojiIndex: newIndex });
  }
  
  render() {
    const { emojis } = this.props;

    let emojiArray = emojis.map((emoji, index) => (
      <div key={index} >
        <h2>{emoji.title}</h2>
        <img src={emoji.url} alt={emoji.title} />
        <p>{emoji.description}</p>
      </div>
    ));

    return (
      <div className="gallery-view">

        <button onClick={() => this.scroll(-1)}> Left </button>
        
        {emojiArray[this.state.emojiIndex]}

        <button onClick={() => this.scroll(1)}> Right </button>
      </div>
    );

  }

}
