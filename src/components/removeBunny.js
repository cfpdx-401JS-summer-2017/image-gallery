import React from 'react';

export default function RemoveBunny({ onRemove },{ bunny }) {
    return (
        <button onClick={() => onRemove(bunny)}>X</button>
    );
}        