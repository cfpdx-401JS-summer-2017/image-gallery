import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

List.propTypes = {
  hondas: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default function List({ hondas }) {
  return (
    <div className="listView">
      <ul>
        {hondas.map((honda, i) => (
          <li key={i}>
            <span className="title">{honda.title}</span>
            <span>{honda.description}</span>
            <Link
              to={{
                pathname: '/images/detail/',
                search: `${i}`,
                params: {honda}
              }}>
              <span role="img" aria-label="linktodetailpage">
                &#128279;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
