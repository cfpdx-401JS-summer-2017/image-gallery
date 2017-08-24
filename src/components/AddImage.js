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
        <form>
        <input
          type="text"
          className="addImageTextInput"
          placeholder="enter a title for your image"
        />
        <input
          type="textarea"
          className="addImageTextInput"
          name="newImage"
          placeholder="enter a description for your image"
        />
        <input
          type="text"
          className="addImageTextInput"
          name="newImage"
          placeholder="paste in a new url to add an image"
        />
        <button value="add image" name="add image" onSubmit={target => onSubmitImage({target})}/>
          </form>
          </div>
    );
  }
}