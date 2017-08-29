import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ImageList extends Component {

    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.object)
    }

        
    render() {
        const { images, onRemove } = this.props;
        if(images.length === 0) {
            return (
                <p>There are currently no images available</p>
            )}
        return (
            <ul>
                {this.props.images.map((image, index) => {
                    return (<li key={index}> <a href={image.url}> {image.title}</a>
                        <p>{image.description}</p>
                        <button onClick = {() => onRemove(image)}>Remove</button>
                    </li>
                    )
                })}
            </ul>
        )
    }
}
