import React from 'react';
import PropTypes from 'prop-types';

List.propTypes = {
  images: PropTypes.array,
  view: PropTypes.string
};

export default function List({ images }) {

  return (
    <div className="listView">
      <ul>
        {images.map((image, i) => (
          <li key={i}>
            <span className="title">{image.title}</span>
            <span>{image.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
