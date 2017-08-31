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
		
		const { props } = this.props;
		
		return (
			<ul className="list">
				{ props.bunnies.map( (bunny, index) => {
					return (
						<li key={index}>
						<a href={bunny.url}>{bunny.title}</a>
						<p>{bunny.description}</p>
						</li>)
				})}
			</ul>
		)
	}

}