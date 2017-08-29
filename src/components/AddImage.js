import React from 'react';
import PropTypes from 'prop-types';
import {AddNewImage} from '../services/imageService';

AddImage.propTypes = {
  AddNewImage: PropTypes.func
};

export default function AddImage() {

  return (
    <div className="addImageForm">
      <form
        onSubmit={event => {
          event.preventDefault();
          const form = event.target;
          const { title, desc, url } = form.elements;
          AddNewImage(title.value, desc.value, url.value);
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
