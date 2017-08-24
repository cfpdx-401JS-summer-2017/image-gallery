import React, { Component } from 'react';
import PropTypes from 'prop-types';

GalleryItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export function GalleryItem({ title, description, url, bunny, onRemove, onUpdate, bunnyNum }) {
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
        const { galleryArray, onRemove, onUpdate, bunnyNum } = this.props;
        const bunnyGallery = galleryArray.map((bunny, i) => (
            <GalleryItem key={i} bunny={bunny} bunnyNum={bunnyNum} title={bunny.title} description={bunny.description} url={bunny.url} onRemove={onRemove} onUpdate={onUpdate} />
        ));
        return (
            <div>
                {bunnyGallery[bunnyNum]}
                <button onClick={() => onUpdate(bunnyNum - 1)}>Previous Bunny</button>
                <button onClick={() => onUpdate(bunnyNum + 1)}>Next Bunny</button>
            </div>
        );
    }
}