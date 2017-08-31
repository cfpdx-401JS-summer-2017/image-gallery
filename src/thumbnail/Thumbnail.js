import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Thumbnail extends Component {

    static propTypes = {
        bunnies: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        return (
            <div className="thumbnails">
                { this.props.bunnies.map( ( bunny, index ) => {
                    return (
                        <div key={index}>
                            <img src={bunny.url} alt={bunny.title}/>
                            <h6>{bunny.title}</h6>
                        </div>
                    )
                })}
            </div>
        )
    }

}