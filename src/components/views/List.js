import React from 'react';
import PropTypes from 'prop-types';

List.propTypes = {
  hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteImage: PropTypes.func
};

export default function List({ hondas, deleteImages }) {
  return (
    <div className="listView">
      <ul>
        {hondas.map((honda, i) => (
          <li key={i}>
            <span className="title">{honda.title}</span>
            <span>{honda.description}</span>
            <span role="img" aria-label="">
              <a href={`/images?detail/${i}`}>&#128279;</a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
