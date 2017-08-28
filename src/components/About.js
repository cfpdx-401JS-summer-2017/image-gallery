import React from 'react';
import PropTypes from 'prop-types';

export default function About({match, location, history}) {

  About.propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object
  }

return(

  <div>Welcome to the About page!</div>
);
}

