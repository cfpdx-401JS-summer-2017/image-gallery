import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Thumb extends PureComponent {
  static propTypes = {
    hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteImage: PropTypes.func
  };

  render() {
    const { deleteImage, hondas } = this.props;
    return (
      <div className="thumbView">
        {hondas.map((honda, i) =>
          <div key={i}>
            <input type="checkbox" onChange={target => deleteImage(i)} />
            <img className="thumb" alt={honda.alt} src={honda.url} />
          </div>
        )}
      </div>
    );
  }
}
