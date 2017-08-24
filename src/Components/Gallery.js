import React, { Component } from 'react';
import PropTypes from 'prop-types';

GalleryItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export function GalleryItem({ title, description, url, bunny, onRemove }) {
    return (
        <div className="galleryView">
            <img src={url} alt={description} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => onRemove(bunny)} >X</button>
        </div>  
    );
}

export class Gallery extends Component {

    static propTypes = {
        galleryArray: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        const { galleryArray, onRemove } = this.props;
        return (
            <div>
                {galleryArray.map((bunny, i) => (
                    <GalleryItem key={i} bunny={bunny} title={bunny.title} description={bunny.description} url={bunny.url} onRemove={onRemove} />
                ))}
            </div>
        );
    }
}