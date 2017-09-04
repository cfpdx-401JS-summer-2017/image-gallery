import React from 'react';
import PropTypes from 'prop-types';

Detail.propTypes = {
  imagesFromParent: PropTypes.func
};

export default function Detail({ i, image }) {

  console.log(i, image)
  return (
    <div className="detailView">
      <div>
        <img
          className="detailImage"
          alt={image.alt}
          src={`${image.url}`}
        />
        <div className="title">{image.title} </div>
        <div className="description">{image.description}</div>
      </div>
    </div>
  );
}
