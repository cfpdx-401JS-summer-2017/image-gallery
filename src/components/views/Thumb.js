import React from 'react';
import PropTypes from 'prop-types';

Thumb.propTypes = {
  deleteImage: PropTypes.func,
  imagesFromParent: PropTypes.func
};

export default function Thumb({ deleteImage, imagesFromParent, view }) {
  const {imageArray} = imagesFromParent();

  return (
    <div className="thumbView">Thumb!
      {imageArray.map((image, i) => (
        <div key={i}>
          <input type="checkbox" onChange={target => deleteImage(i)} />
          <img
            value={i}
            className="thumbImg"
            alt={image.alt}
            src={`./images/detail/${image.url}`}
          />
          <div className="title" key={image.title}>
            {image.title}
          </div>
        </div>
      ))}
    </div>
  );
}
