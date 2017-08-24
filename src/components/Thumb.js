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
      <div className="thumbViewWrap">
        {hondas.map((honda, i) =>
          <div key={i}>
            <input type="checkbox" onChange={target => deleteImage(i)} />
            <img className="thumbImg" alt={honda.alt} src={honda.url} />
            <div className="title" key={honda.title}>
              {honda.title}
            </div>
          </div>
        )}
      </div>
    );
  }
}
