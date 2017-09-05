import React from 'react';
import PropTypes from 'prop-types';

Gallery.propTypes = {
  deleteImage: PropTypes.func,
  images: PropTypes.array
};

export default function Gallery({ deleteImage, images }) {


  return (
    <div className="galleryView">
      {images.map((image, i) => (
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
