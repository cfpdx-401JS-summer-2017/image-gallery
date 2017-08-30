import React from 'react';
import PropTypes from 'prop-types';

Gallery.propTypes = {
  hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteImage: PropTypes.func
};

export default function Gallery({hondas, deleteImage}) {
  return (
    <div className="galleryView">
      {hondas.map((honda, i) => (
        <div key={i}>
          <input type="checkbox" onChange={target => deleteImage({ i })} />
          <img
            value={i}
            className="galleryImg"
            alt={honda.alt}
            src={`./images/detail/${honda.url}`}
          />
        </div>
      ))}
    </div>
  );
}
