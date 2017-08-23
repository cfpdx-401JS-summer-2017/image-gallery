import React, { Component } from 'react';

export default class List extends Component {

	constructor(props) {
		super(props);
	}



	render () {
		return (
			<ul className="list">
				{ this.props.bunnies.map( (bunny, index) => {
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