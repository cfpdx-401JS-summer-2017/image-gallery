import React from 'react';
import PropTypes from 'prop-types';

Home.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};
export default function Home({ match, location, history }) {

  return <div>Welcome home!</div>;
}
