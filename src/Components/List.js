import React from 'react';
import PropTypes from 'prop-types';

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export function ListItem({ title, description, url }) {
    return (
        <ul>
            <li>{title}</li>
            <li>{description}</li>
            <li>{url}</li>
        </ul>
    );
}