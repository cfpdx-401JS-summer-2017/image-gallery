import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AddImage extends PureComponent {
  static propTypes = {
    hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddImage: PropTypes.func
  };

  render() {
    const { hondas, onAddImage } = this.props;
    return (
      <select className="imageSelect">
        {hondas.map((honda, i) =>
            <option key={i} value={honda.url} onChange={target => onAddImage(target)}>
            </option>
        )}
      </select>
    );
  }
}
