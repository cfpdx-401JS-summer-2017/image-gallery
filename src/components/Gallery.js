import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class Gallery extends PureComponent {
  static propTypes = {
    hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteImage: PropTypes.func
  };

  render () {
    const {deleteImage, hondas} = this.props;
    // console.log('match: ', match, 'location: ', location)
    return (
      <div className="galleryView">
      {hondas.map((honda, i) =>
        <div key={i}>
        <input type="checkbox" onChange={target => deleteImage({i})} />
        <img className="galleryImg" alt={honda.alt} src={honda.url} />
        </div>
      )}
      </div>
    );
  }
}