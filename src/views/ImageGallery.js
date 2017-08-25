import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ImageGallery extends Component {

    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.object)
    }
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    render() {
        const { images, onRemove } = this.props;
        let currentImg = images[this.state.index];
        
        if(!currentImg) {
        return (
            <p>There are currently no images available</p>
        )}
        return(
            <div>
                <button disabled={this.state.index === 0} onClick={() => this.setState({index: this.state.index - 1})}>Previous</button>
                <img key={currentImg.id} src={currentImg.url} width="400" alt="bunny" />
                <p>{currentImg.title}</p>
                <p>{currentImg.id}</p>
                <p>{currentImg.description}</p>
                <button onClick = {() => onRemove(currentImg)}>Remove</button>
                <button disabled={this.state.index === images.length - 1} onClick={() => this.setState({index: this.state.index + 1})}>Next</button>

            </div>
        )
    }
}