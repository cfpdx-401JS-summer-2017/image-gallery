import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function ChooseView({ view, onChangeView }) {
  ChooseView.propTypes = {
    view: PropTypes.string,
    onChangeView: PropTypes.func
  };

  return (
    <div className="viewChooserWrap">
      {['list', 'thumb', 'gallery'].map((currentView, i) =>
        <div key={i} className="view">
          <span>
            {currentView}
          </span>
          <NavLink to={{
            pathname:"/",
            search: "?view="
            }}>
            <input
              type="radio"
              className="viewChooser"
              name={currentView}
              checked={currentView === view}
              onChange={target => onChangeView({ currentView })}
            />
          </NavLink>
        </div>
      )}
    </div>
  );
}
