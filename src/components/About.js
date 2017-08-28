import React from 'react';
import PropTypes from 'prop-types';
// import createHistory from 'history/createBrowserHistory';

export default function About({match, location, history}) {

  About.propTypes = {
    location: PropTypes.object
  }
  // const history = createHistory();

  // history.pushState(location.location.pathname)
  console.log('about : ', match, location, history)

return(
      // history.push({search: location.search})

  <div>Welcome to the About page!</div>
);
}

