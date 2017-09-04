import React from 'react';
import PropTypes from 'prop-types';

List.propTypes = {
  imagesFromParent: PropTypes.func
};

export default function List({ imagesFromParent, view }) {
  const {imageArray} = imagesFromParent();

  return (
    <div className="listView">List!
      <ul>
        {imageArray.map((image, i) => (
          <li key={i}>
            <span className="title">{image.title}</span>
            <span>{image.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
