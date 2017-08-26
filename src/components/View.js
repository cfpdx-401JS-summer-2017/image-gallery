import React, {Component} from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import List from './List';
import Gallery from './Gallery';
import Thumb from './Thumb';
import qs from 'qs';

export default class View extends Component {


  // const {deleteImage, hondas, match,location} = this.props;
  render() {
    const currentView = qs.parse(this.props.match.location.search.slice(1)).view || 'gallery';


        // const View = view === 'list' ? List : view === 'gallery' ? Gallery : Thumb;
    // const { match, location } = this.props;
    console.log('props: ', currentView)

    return(
      <div>View!</div>
    );


  }


}