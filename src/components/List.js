import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class List extends PureComponent {
  static propTypes = {
    hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteImage: PropTypes.func
  };

  render() {
    const { deleteImage, hondas } = this.props;
    return (
      <div className="listView">
        {hondas.map((honda, i) =>
          <div key={i}>
            <input type="checkbox" onChange={target => deleteImage(i)} />
            <div className="list">{honda.description}</div>
          </div>
        )}
      </div>
    );
  }
}
