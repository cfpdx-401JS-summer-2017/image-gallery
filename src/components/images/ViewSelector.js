import React, { Component } from 'react';
import ImageList from '../views/ImageList';
import ImageThumbnail from '../views/ImageThumbnail';
import ImageGallery from '../views/ImageGallery';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import qs from 'qs';

export const View = {
    list: ImageList,
    thumbnail: ImageThumbnail,
    gallery: ImageGallery
}

export const views = Object.keys(View);

function ViewSelector(props) {

    const { images, onRemove, match, location, history } = props;
    const view = qs.parse(location.search.slice(1)).view || 'thumbnail';
    const ImageView = View[view];



    return (
        <div className="App">
            <div>
                {views.map(v => (
                    <button key={v} disabled={v === view} onClick={() => history.push({ search: `?view=${v}` })}>
                        {v}</button>))}
                <ImageView images={images} onRemove={onRemove} />
            </div>
        </div>
    );
}

export default withRouter(ViewSelector);