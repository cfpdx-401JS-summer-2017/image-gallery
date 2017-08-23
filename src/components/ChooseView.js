import React from 'react';
import PropTypes from 'prop-types';

ChooseView.propTypes = {
  view: PropTypes.string,
  onChangeView: PropTypes.func
}

export default function ChooseView({onChangeView}) {
  return (
    <div className="viewChooser">
      <div className="view">
        <label>
          list
          <input
            type="radio"
            name="viewChooser"
            value="list"
            onChange={target => onChangeView(target)}
          />
        </label>
      </div>
      <div className="choices">
        <label>
          gallery
          <input
            type="radio"
            name="viewChooser"
            value="gallery"
            onChange={target => onChangeView(target)}
          />
        </label>
      </div>
      <div className="choices">
        <label>
          thumb
          <input
            type="radio"
            name="viewChooser"
            value="thumb"
            onChange={target => onChangeView(target)}
          />
        </label>
      </div>
    </div>
  );
}
