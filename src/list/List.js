import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {

	static propTypes = {
        bunnies: PropTypes.arrayOf(PropTypes.object).isRequired
    }

	constructor(props) {
		super(props);
	}



	render () {
		
	
		return (
			<ul className="list">
				{ this.props.bunnies.map( (bunny) => {
					return (
						<li key={bunny._id}>
						<a href={bunny.url}>{bunny.title}</a>
						<p>{bunny.description}</p>
						</li>)
				})}
			</ul>
		)
	}

}