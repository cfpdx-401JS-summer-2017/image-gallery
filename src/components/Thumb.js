import React from 'react';
import PropTypes from 'prop-types';

Thumb.propTypes = {
  hondas: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default function Thumb({hondas}) {
  return (
    <div className="thumbView">
      {hondas.map((honda, i) => <img className="thumb" alt={honda.alt} key={i} src={honda.url}/>)}

      </div>



  );

}