import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

List.propTypes = {
  imagesFromParent: PropTypes.func
};

export default function List({ imagesFromParent }) {
  const imageArray = imagesFromParent();

  return (
    <div className="listView">List!
      <ul>
        {imageArray.map((image, i) => (
          <li key={i}>
            <span className="title">{image.title}</span>
            <span>{image.description}</span>
            <Link
              to={{
                pathname: '/images/detail',
                search: `${i}`,
                params: { image }
              }}>
              <span role="img" aria-label="linktodetailpage">
                &#128279;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
