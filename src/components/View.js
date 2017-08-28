import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Gallery from './Gallery';
import Thumb from './Thumb';
import ChooseView from './ChooseView';
import AddImage from './AddImage';


export default class View extends Component {
  static propTypes = {
    hondas: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteImage: PropTypes.func,
    handleChangeView: PropTypes.func,
    match: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      deleteImage: this.props.deleteImage,
      // handleChangeView: this.props.onChangeView,
      hondas: this.props.hondas
    }
  }

  handleChangeView(target) {
    this.setState({ view: target.currentView });
  }


  render() {

    // this.props.match.history.push({state: this.props.match.location})
    console.log('view: ', this.props, this.state);
    const currentView =
      this.props.match.location.search.substr(1) || 'gallery';

    const View =
      currentView === 'list'
        ? List
        : currentView === 'gallery' ? Gallery : Thumb;

        return (
          <div>
          <div className="functionsHeader">
          <ChooseView
            view={currentView}
            onChangeView={target => this.handleChangeView(target)}
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
