import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ImageList extends Component {

    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        const { images } = this.props;
        return (
            <ul>
                {this.props.images.map((image, index) => {
                    return (<li key={index}> <a href={image.url}> {image.title}</a>
                        <p>{image.description}</p>
                    </li>
                    )
                })}
            </ul>
        )
    }
}
