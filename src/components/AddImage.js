import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AddImage extends PureComponent {
  static propTypes = {
    hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddImage: PropTypes.func
  };

  render() {
    const { onAddImage } = this.props;
    return (
      <div>

      </div>
    );
  }
}
