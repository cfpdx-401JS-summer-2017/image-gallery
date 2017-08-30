import React from 'react';
import PropTypes from 'prop-types';

Thumb.propTypes = {
  hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteImage: PropTypes.func
};

export default function Thumb({ hondas, deleteImage }) {
  return (
    <div className="thumbView">
      {hondas.map((honda, i) => (
        <div key={i}>
          <input type="checkbox" onChange={target => deleteImage(i)} />
          <img value={i} className="thumbImg" alt={honda.alt} src={honda.url} />
          <div className="title" key={honda.title}>
            {honda.title}
          </div>
        </div>
      ))}
    </div>
  );
}