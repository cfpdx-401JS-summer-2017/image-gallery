import React, { Component } from 'react';
import PropTypes from 'prop-types';

GalleryItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export function GalleryItem({ title, description, url }) {
    return (
        <div>
            <img src={url} alt={description} />
            <p>{title}</p>
            <p>{description}</p>
        </div>  
    );
}

export class Gallery extends Component {

    static propTypes = {
        galleryArray: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        const { galleryArray } = this.props;
        return (
            <div>
                {galleryArray.map((item, i) => (
                    <GalleryItem key={i} title={item.title} description={item.description} url={item.url} />
                ))}
            </div>
        );
    }
}