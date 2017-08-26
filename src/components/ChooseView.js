import React from 'react';
import { NavLink} from 'react-router-dom';

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
          <NavLink
            to={{
              pathname: '/view',
              search: `?view=${currentView}`
            }}
            activeStyle={{
              color: '#000000'
            }}>
            <div>
              {currentView}
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
}
