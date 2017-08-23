import React, { Component } from 'react';
import { bootstrapBunnies } from './services/bunnies'

export default class Bunnies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bunnies: bootstrapBunnies()
    }
  }
  render() {
    const { bunnies } = this.state;
    return (
      <ul>
        {bunnies && bunnies.map(bunny => (
          <li key={bunny.id}>
            <Bunny bunny={bunny}/>
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
export function Bunny({ bunny }) {
  return(
    <div style={{
      padding: '10px',
      clear: 'both'
    }}>
      <img src={bunny.url}
          alt={bunny.title}
          style={{
            float: 'left',
            width: 100
          }}/>
      <span>{bunny.title}!</span>
    </div>
  );
}