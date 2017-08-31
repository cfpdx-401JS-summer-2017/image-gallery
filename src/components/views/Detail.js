import React from 'react';
import PropTypes from 'prop-types';

Detail.propTypes = {
  location: PropTypes.object
};

export default function Detail({ location }) {
  console.log('detail: ', location.pathname);
  let honda = location.params.honda;
  console.log(location.pathname, honda.url);
  return (
    <div className="detailView">
      <div>
        <img
          className="detailImage"
          alt={honda.alt}
          src={`${location.pathname}/${honda.url}`}
        />
        <div className="title">{honda.title} </div>
        <div className="description">{honda.description}</div>
      </div>
    </div>
  );
}
