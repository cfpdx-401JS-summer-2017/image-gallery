import React, { Component } from 'react';
import images from './images';

// const View = {
//     list: ImageList,
//     thumbnail: ImageThumbnail,

// }

// const views = Object.keys(View);

export default class ImageThumbnail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: views[1],
        }
    }


    render() {
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
                })};
            </div>
        )
    }
}