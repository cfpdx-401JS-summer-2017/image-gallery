import React, { Component } from 'react';
import images from './images';

// const View = {
//     list: ImageList,
//     thumbnail: ImageThumbnail,
//     gallery: ImageGallery
// }

// const views = Object.keys(View);

export default class ImageGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            view: views[2],
            current: images[0]
        }
    }

    render() {
        let currentImg = this.state.current;
        return (
            <div>
                <button disabled={this.state.index === 0} onClick={() => this.setState({ index: --this.state.index, current: images[this.state.index] })}>Previous</button>
                <img key={currentImg.id} src={currentImg.url} width="400" />
                <p>{currentImg.title}</p>
                <p>{currentImg.id}</p>
                <p>{currentImg.description}</p>
                <button disabled={this.state.index === images.length - 1} onClick={() => this.setState({ index: ++this.state.index, current: images[this.state.index] })}>Next</button>

            </div>
        )
    }
}