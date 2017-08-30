import React from 'react';
import PropTypes from 'prop-types';

About.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};

export default function About({ match, location, history }) {
  return <div>Welcome to the About page!</div>
}
