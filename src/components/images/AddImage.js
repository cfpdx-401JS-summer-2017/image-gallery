import React from 'react';
import PropTypes from 'prop-types';

AddImage.propTypes = {
  addImage: PropTypes.func
};

export default function AddImage({ addImage }) {
  console.log('in AddImage: ', addImage)
  return (
    <div className="addImageForm">
      <form
        onSubmit={event => {
          event.preventDefault();
          const form = event.target;
          const { title, desc, url } = form.elements;
          addImage({title:title.value, desc:desc.value, url:url.value });
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
          type="text"
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
