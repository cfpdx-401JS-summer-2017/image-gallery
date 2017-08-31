import React, { Component } from 'react';
import { bootstrapBunnies } from './services/bunnies'
import BunnyApp from './BunnyApp'
import {Thumbnail, List, Gallery} from './components/viewFormats'

 class Bunnies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bunnies: bootstrapBunnies(),
    }
  }
  render() {
    const { bunnies } = this.state;
    const mode = this.props;
    console.log(mode);
    return (
      <ul>
        {bunnies && bunnies.map(bunny => (
          <li key={bunny.id}>
             <Thumbnail bunny={bunny}/> 
          </li>
        ))}
      </ul>
    );
  }
}
Bunnies.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  url: React.PropTypes.string
  
}
function changeView(handelChangeView) {

}