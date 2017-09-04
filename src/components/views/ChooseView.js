import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

ChooseView.propTypes = {
  view: PropTypes.string,
  imageArray: PropTypes.array,
  onChangeView: PropTypes.func
};

function ChooseView({ location, match, imageArray, view, onChangeView , imagesFromParent}) {
  console.log('in choose: ', imageArray, imagesFromParent);

  return (
    <div className="viewChooserWrap">
      {['list', 'thumb', 'gallery'].map((currentView, i) => (
        <div key={i} className="view">
          <NavLink
            to={{
              pathname: '/images',
              search: `${currentView}`,
              imageArray: `${imageArray}`,
              location: `${location}`,
              match: `${match}`,
              imagesFromParent: `${imagesFromParent}`,
              dataFromChild: `${imageArray}`
            }}
            activeStyle={{
              color: '#000000'
            }}>
            <div onClick={target => onChangeView({ currentView})}>
              {currentView}
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default ChooseView;
