import React from 'react';
import PropTypes from 'prop-types';

Gallery.propTypes = {
  imageArray: PropTypes.array,
  deleteImage: PropTypes.func,
  imagesFromParent: PropTypes.func
};

export default function Gallery({ deleteImage, imagesFromParent }) {

  const {imageArray} = imagesFromParent();

  return (
    <div className="galleryView">Gallery!
      {imageArray.map((image, i) => (
        <div key={i}>
          <input type="checkbox" onChange={target => deleteImage({ i })} />
          <img
            value={i}
            className="galleryImg"
            alt={image.alt}
            src={image.url}
          />
        </div>
      ))}
    </div>
  );
}
