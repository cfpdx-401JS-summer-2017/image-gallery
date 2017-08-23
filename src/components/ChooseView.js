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
            className="viewChooser"
            name="viewChooser"
            value="listRadio"
            onChange={target => onChangeView(target)}
          />
        </label>
      </div>
      <div className="view">
        <label>
          gallery
          <input
            type="radio"
            className="viewChooser"
            name="viewChooser"
            value="galleryRadio"
            onChange={target => onChangeView(target)}
          />
        </label>
      </div>
      <div className="view">
        <label>
          thumb
          <input
            type="radio"
            className="viewChooser"
            name="viewChooser"
            value="thumbRadio"
            onChange={target => onChangeView(target)}
          />
        </label>
      </div>
    </div>
  );
}
