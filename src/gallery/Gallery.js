import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Gallery extends Component {

    static propTypes = {
        bunnies: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            current: 0
        }
    }

    handleClick(value) {
        const thisImgIndex = this.state.current;
        
        if( value === "Previous" ) {
            if( thisImgIndex > 0) {
                this.setState({
                    current: thisImgIndex - 1
                })
            } else {
                this.setState({
                    current: this.state.bunnies.length - 1
                })
            }
        } else {
            if( thisImgIndex === (this.state.bunnies.length - 1)) {
                this.setState({
                    current: 0
                })
            } else {
                this.setState({
                    current: thisImgIndex + 1
                })
            }
        }
    }

    render() {
        const bunny = this.state.bunnies[this.state.current];
        return (
            <div>
                <img src={bunny.url} alt={bunny.title}/>
                <h5>{bunny.title}</h5>
                <button value="Previous" onClick={(event) => this.handleClick(event.target.value)}>Previous</button>
                <button value="Next" onClick={(event) => this.handleClick(event.target.value)}>Next</button>
            </div>
        )
    }
}