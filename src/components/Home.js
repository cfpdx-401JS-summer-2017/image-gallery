import React from 'react';
import PropTypes from 'prop-types';


export default function Home({ location }) {
  Home.propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object
  };
  return <div>Welcome home!</div>;
}
