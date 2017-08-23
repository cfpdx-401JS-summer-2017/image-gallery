import React from 'react';
import PropTypes from 'prop-types';
// import hondas from '../data/hondas'

Gallery.propTypes = {
  hondas: PropTypes.arrayOf(PropTypes.object).isRequired

}

export default function Gallery({hondas}) {
  return (
    <div className="galleryView">
      {hondas.map((honda, i) => <img className="gallery" alt={honda.alt} key={i} src={honda.url}/>)}
      </div>



  );

}