import React from 'react';
import PropTypes from 'prop-types';

Detail.propTypes = {
  hondas: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default function Detail({location, history,match }) {
  console.log('detail: ',location.params,history,match )
  return (
    <div className="detailView">
        <div>
          {/* <img className="detailImage" alt={honda.alt} src={honda.url} />
          <div className="title">{honda.title} </div>
          <div className="description">{honda.description}</div> */}
          </div>
    </div>
  );
}