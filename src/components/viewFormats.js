import React from 'react';
import PropTypes from 'prop-types';

Thumbnail.PropTypes = {
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    bunny:PropTypes.object.isRequired,
    onRemove:PropTypes.func.isRequired,
};
List.PropTypes = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    bunny:PropTypes.object.isRequired,
    onRemove:PropTypes.func.isRequired,
};
Gallery.PropTypes = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    bunny:PropTypes.object.isRequired,
    onRemove:PropTypes.func.isRequired,
};

export function Thumbnail({ bunny }) {
    return (
        <div style={{
            padding: '10px',
            clear: 'both'
        }}>
            <img src={bunny.url}
                alt={bunny.title}
                style={{
                    float: 'left',
                    width: 100
                }}/>
            <span>{bunny.title}!</span>
        </div>
    );
}
export function List({ bunny }) {
    return (
        <div style={{
            padding: '10px',
            clear: 'both'
        }}>
            <span>{bunny.title}!</span>
            <section>{bunny.url}</section>
            <section>{bunny.description}</section>
        </div>
    );
}
export function Gallery({ bunny }) {
    return (
        <div style={{
            padding: '10px',
            clear: 'both'
        }}>
            <img src={bunny.url}
                alt={bunny.title}
                style={{
                    float: 'center',
                    width: 500
                }}/>
            <section>{bunny.title}!</section>
            <section>{bunny.description}</section>

        </div>
    );
}