import React, { Component } from 'react';
import PropTypes from 'prop-types';

GalleryItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    bunny: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
}

export function GalleryItem({ title, description, url, bunny, onRemove, onUpdate }) {
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
        galleryArray: PropTypes.arrayOf(PropTypes.object).isRequired,
        onRemove: PropTypes.func.isRequired
    }
    
    render() {
        const { galleryArray, onRemove, onUpdate, bunnyNum } = this.props;
        const bunnyGallery = galleryArray.map((bunny, i) => (
            <GalleryItem key={i} bunny={bunny} title={bunny.title} description={bunny.description} url={bunny.url} onRemove={onRemove} onUpdate={onUpdate} />
        ));
        return (
            <div>
                <nav id="galleryNav">
                    <button onClick={() => onUpdate(-1)}>&laquo; Previous</button> <button onClick={() => onUpdate(1)}>Next &raquo;</button>
                    <p id="bunnyCounter">Bunny {bunnyNum + 1} of {bunnyGallery.length}</p>
                </nav>
                {bunnyGallery[bunnyNum]}
            </div>
        );
    }
}