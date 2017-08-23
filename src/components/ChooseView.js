import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ChooseView extends PureComponent {

  static propTypes = {
    view: PropTypes.string,
    onChangeView: PropTypes.func,
    views: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    const viewsBuilder = ['list', 'thumb', 'gallery'];
    const { onChangeView, view } = this.props;
    return (
      <div className="viewChooser">
        {viewsBuilder.map((currentView, i) =>
          <div key={i} className="view">
            <label>
              {currentView}
              <input
                type="radio"
                className="viewChooser"
                name={currentView}
                checked={currentView === view}
                onChange={target => onChangeView({currentView})}
              />
            </label>
          </div>
        )}
      </div>
    );
  }
}
