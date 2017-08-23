import React from 'react';
import PropTypes from 'prop-types';

List.propTypes = {
  hondas: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default function List({hondas}) {
  return (
    <div className="listView">
      {hondas.map((honda, i) => <img className="gallery" alt={honda.alt} key={i} src={honda.url}/>)}

      </div>



  );

}