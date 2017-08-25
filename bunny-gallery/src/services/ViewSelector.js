import React, { Component } from 'react';
import ImageList from '../views/ImageList';
import ImageThumbnail from '../views/ImageThumbnail';
import ImageGallery from '../views/ImageGallery';

const View = {
    list: ImageList,
    thumbnail: ImageThumbnail,
    gallery: ImageGallery
}

const views = Object.keys(View);

class ViewSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: views[1],
            views: views,
        }
    }

    render() {
        const { images, onRemove } = this.props;
        const { views, view } = this.state;
        const ImageView = View[view];


        return (
            <div className="App">
                <div>
                    {views.map(v => (
                        <button key={v} onClick={() => this.setState({ view: v })}>
                            {v}</button>))}
                    <ImageView images={images} views={views} onRemove = {onRemove}/>
                </div>
            </div>
        );
    }
}

export default ViewSelector;