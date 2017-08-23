import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Thumb extends PureComponent {

  static propTypes = {
    hondas: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { hondas } = this.props;
    return (
      <div className="thumbView">
      {hondas.map((honda, i) =>
        <img className="thumb" alt={honda.alt} key={i} src={honda.url} />
      )}
      </div>
    );
  }

}