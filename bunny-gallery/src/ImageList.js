import React, { Component } from 'react';
import images from './images';

// const View = {
//     list: ImageList,
//     thumbnail: ImageThumbnail,
//     gallery: ImageGallery
// }

// const views = Object.keys(View);

export default class ImageList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: views[0]
        }
    }

    render() {
        return (
            <ul>
                {images.map((image, index) => {
                    return (<li key={index}> <a href={image.url}> {image.title}</a>
                        <p>{image.description}</p>
                    </li>
                    )
                })}
            </ul>
        )
    }
}