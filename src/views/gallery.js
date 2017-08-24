import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <img src={emoji.url} alt={emoji.title} />
        <h2>{emoji.title}</h2>
        <p>{emoji.description}</p>
      </div>
    ));

    return (
      <div className="gallery-view">
        {emojiArray[this.state.emojiIndex]}
        <button className="gallery-nav-button" onClick={() => this.scroll(-1)}> Back </button>
        <button className="gallery-nav-button" onClick={() => this.scroll(1)}> Next </button>
      </div>
    );

  }

}

EmojiGallery.propTypes = {
  emojis: PropTypes.object,
  emojiIndex: PropTypes.number,  
}
