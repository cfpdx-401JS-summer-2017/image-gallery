import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ChooseView extends PureComponent {
  static propTypes = {
    view: PropTypes.string,
    onChangeView: PropTypes.func,
    onAddImage: PropTypes.func
  };

  render() {
    const { onAddImage, onChangeView, view } = this.props;
    return (
      <div className="viewChooserWrap">
        <input
          type="text"
          className="addImageTextInput"
          name="newImage"
          placeholder="paste in a new url to add an image"
          onChange={target => onAddImage(target)}
        />
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
  }
}
