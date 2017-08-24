import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class List extends PureComponent {
  static propTypes = {
    hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteImage: PropTypes.func
  };

  render() {
    const { hondas } = this.props;
    return (
      <div className="listView">
        <ul>
          {hondas.map((honda, i) =>
            <li key={i}>
            <span className="title">{honda.title}</span> <span>{honda.description}</span> <span role="img" aria-label=""><a href={i}>&#128279;</a></span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
