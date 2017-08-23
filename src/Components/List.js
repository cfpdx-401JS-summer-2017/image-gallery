import React, { Component } from 'react';
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
            <li><a target="_blank" href="{url}">{url}</a></li>
        </ul>
    );
}

export class List extends Component {

    static propTypes = {
        listArray: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    render() {
        const { title, description, url, ListArray } = this.props;
        return (
            <div>
                {ListArray.map((item, i) => (
                    <ListItem key={i} title={title} description={description} url={url} />
                ))}
            </div>
        );
        
    }
}