import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Gallery from './Gallery';
import Thumb from './Thumb';
import qs from 'qs';

export default class View extends Component {
  static propTypes = {
    hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteImage: PropTypes.func,
    match: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      deleteImage: this.props.deleteImage,
      hondas: this.props.hondas
    }
  }

  render() {
    const currentView =
      qs.parse(this.props.match.location.search.slice(1)).view || 'gallery';
    const View =
      currentView === 'list'
        ? List
        : currentView === 'gallery' ? Gallery : Thumb;

    return (
      <div>
        <View hondas={this.props.hondas} deleteImage={target => this.state.deleteImage({target})}/>
      </div>
    );
  }
}
