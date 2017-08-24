import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DeleteEmoji extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedId: 0
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    let id = e.target.value;
    this.setState({ selectedId: id });
  }  
  
  render() {
    const { emojis, handleOnSubmit } = this.props;

    return (
      <div>
        <h2>Remove an emoji-wiki</h2>
        <form onSubmit={event => {
            event.preventDefault();
            const form = event.target;
            handleOnSubmit(this.state.selectedId);
            form.reset();
        }}>
          <select value={this.state.selectedId} onChange={this.handleOnChange}>
            <option value="0">--- pick one ---</option>
            {emojis.map(emoji => {
              return <option key={emoji.id} value={emoji.id}>{emoji.title}</option>
            })}
          </select>
          <br/>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

DeleteEmoji.PropTypes = {
  selectedId: PropTypes.number,
}
