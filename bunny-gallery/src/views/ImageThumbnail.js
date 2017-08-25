import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ImageThumbnail extends Component {

    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.object)
    }
    constructor(props) {
        super(props);
    }


    render() {
        const { images } = this.props;
        
        return (
            <div>
                {images.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image.url} width="200" />
                            <p>{image.title}</p>
                            <p>{image.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
