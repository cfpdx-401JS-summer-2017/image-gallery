import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Gallery from './Gallery';
import Thumb from './Thumb';
import ChooseView from './ChooseView';
import AddImage from './AddImage';
import qs from 'qs';



export default class View extends Component {
  static propTypes = {
    hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteImage: PropTypes.func,
    onChangeView: PropTypes.func,
    match: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      deleteImage: this.props.deleteImage,
      onChangeView: this.props.onChangeView,
      hondas: this.props.hondas
    }
  }




  render() {

    console.log('view: ', this.props, this.state);
    const currentView = qs.parse(this.props.match.location.search.slice(1)).view || 'gallery';
    // const currentView =
    //   this.props.match.location.search.substr(1) || 'gallery';

    const View =
      currentView === 'list'
        ? List
        : currentView === 'gallery' ? Gallery : Thumb;

        return (
          <div>
          <div className="functionsHeader">
          <ChooseView
            view={currentView}
            onChangeView={target => this.props.onChangeView(target)}
          />
          <AddImage onSubmitImage={this.addImage} />
        </div>
      <div>
        <View hondas={this.props.hondas} deleteImage={target => this.state.deleteImage({target})}/>
      </div>
      </div>
    );
  }
}
