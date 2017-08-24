import React, { Component } from 'react';

export default class DeleteEmoji extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedValue: 'none'
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    let index = e.target.value;
    this.setState({ selectedValue: index });
  }  
  
  render() {
    const { emojis, handleOnSubmit } = this.props;

    return (
      <div>
        <h2>Remove an emoji-wiki</h2>
        <form onSubmit={event => {
            event.preventDefault();
            const form = event.target;
            handleOnSubmit(this.state.selectedValue);
            form.reset();
        }}>
          <select value={this.state.selectedValue} onChange={this.handleOnChange}>
            <option value="none">--- pick one ---</option>
            {emojis.map((emoji, index) => {
              return <option key={index} value={index}>{emoji.title}</option>
            })}
          </select>
          <br/>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
