import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AddImage extends PureComponent {
  static propTypes = {
    onSubmitImage: PropTypes.func
  };

  render() {
    const { onSubmitImage } = this.props;
    return (
      <div className="addImageForm">
        <form
          onSubmit={event => {
            event.preventDefault();
            const form = event.target;
            const { title, desc, url } = form.elements;
            onSubmitImage(title.value, desc.value, url.value);
            form.reset();
          }}>
          <button type="submit" name="add image">
            add image
          </button>
          <input
            type="text"
            className="addImageTextInput"
            name="title"
            placeholder="enter a title for your image"
          />
          <input
            type="textarea"
            className="addImageTextInput"
            name="desc"
            placeholder="enter a description for your image"
          />
          <input
            type="text"
            className="addImageTextInput"
            name="url"
            placeholder="paste in a new url to add an image"
          />
        </form>
      </div>
    );
  }
}
