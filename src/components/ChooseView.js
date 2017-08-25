import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import qs from 'qs';
import PropTypes from 'prop-types';

function ChooseView({ match, view, onChangeView }) {
  ChooseView.propTypes = {
    view: PropTypes.string,
    match: PropTypes.string,
    onChangeView: PropTypes.func
  };
  // const urlView = qs.parse(location.search.slice(1)).view || 'gallery';

  return (
    <Route
      path="/view"
      render={({ history, location }) => {
        return (
          <div className="viewChooserWrap">
            {['list', 'thumb', 'gallery'].map((currentView, i) =>
              <div key={i} className="view">
                <span>
                  {currentView}
                </span>
                <input
                  type="radio"
                  className="viewChooser"
                  name={currentView}
                  checked={currentView === view}
                  onChange={target => onChangeView({ currentView })}
                />
              </div>
            )}
          </div>
        );
      }}
    />
  );
}

export default withRouter(ChooseView);
