import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Gallery extends Component {

    static propTypes = {
        props: {
            bunnies: PropTypes.arrayOf(PropTypes.object).isRequired
        }
    }

    render() {
        const { props } = this.props;
        const bunny = props.bunnies[props.current];
        return (
            <div>
                <img src={bunny.url} alt={bunny.title}/>
                <h5>{bunny.title}</h5>
                <button 
                    value="Previous"   
                    onClick={(event) => props.cycleView(event.target.value)}>
                    Previous
                </button>
                <button 
                    value="Next" 
                    onClick={(event) => props.cycleView(event.target.value)}>
                    Next
                </button>
                <br></br>
                <button 
                    onClick={(event) => props.onDeleteBunny()} >
                    Remove this Bunny
                </button>
            </div>
        )
    }
}