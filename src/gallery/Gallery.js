import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Gallery extends Component {

    static propTypes = {
        bunnies: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        console.log(this.props);
        const bunny = this.props.bunnies[this.props.current];
        console.log(bunny)
        return (
            <div>
                <img src={bunny.url} alt={bunny.title}/>
                <h5>{bunny.title}</h5>
                <button 
                    value="Previous"   
                    onClick={(event) => this.props.cycleView(event.target.value)}>
                    Previous
                </button>
                <button 
                    value="Next" 
                    onClick={(event) => this.props.cycleView(event.target.value)}>
                    Next
                </button>
                <br></br>
                <button 
                    onClick={(event) => this.props.onDeleteBunny()} >
                    Remove this Bunny
                </button>
            </div>
        )
    }
}