import React from 'react';
import PropTypes from 'prop-types';

Thumb.propTypes = {
  deleteImage: PropTypes.func,
  images: PropTypes.array
};

export default function Thumb({ deleteImage, images }) {

  return (
    <div className="thumbView">
      {images.map((image, i) => (
        <div key={i}>
          <input type="checkbox" onChange={target => deleteImage(i)} />
          <img
            value={i}
            className="thumbImg"
            alt={image.alt}
            src={image.url}
          />
          <div className="title" key={image.title}>
            {image.title}
          </div>
        </div>
      ))}
    </div>
  );
}
