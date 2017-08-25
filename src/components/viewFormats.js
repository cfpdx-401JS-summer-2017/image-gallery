import React from 'react';
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