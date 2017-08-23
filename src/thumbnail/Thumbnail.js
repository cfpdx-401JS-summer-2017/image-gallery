import React, { Component } from 'react';

export default class Thumbnail extends Component {

    constructor(props) {
        super(props);
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