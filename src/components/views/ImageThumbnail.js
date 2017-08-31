import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ImageThumbnail extends Component {

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
            <div>
                {images.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image.url} width="200" alt="bunny" />
                            <p>{image.title}</p>
                            <p>{image.description}</p>
                            <button onClick = {() => onRemove(image, index)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
