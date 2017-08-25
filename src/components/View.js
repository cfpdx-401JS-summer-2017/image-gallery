import React, {Component} from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import List from './List';
import Gallery from './Gallery';
import Thumb from './Thumb';
// import qs from 'qs';

const views = ['list', 'gallery', 'thumb']
export default class View extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     views: views
  //   }
  // }

  componentDidMount() {


  }

  // const {deleteImage, hondas, match,location} = this.props;
  render() {

        // const View = view === 'list' ? List : view === 'gallery' ? Gallery : Thumb;
    // const { match, location } = this.props;
    console.log('props: ', this.props)

    return(
      <div>View!</div>
    );


  }


}