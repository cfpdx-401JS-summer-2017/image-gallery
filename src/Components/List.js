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
            <li><h3>{title}</h3></li>
            <li>{description}</li>
            <li><a target="_blank" href={url}>{url}</a></li>
        </ul>
    );
}

export class List extends Component {

    static propTypes = {
        listArray: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        const { listArray } = this.props;
        return (
            <div>
                {listArray.map((item, i) => (
                    <ListItem key={i} title={item.title} description={item.description} url={item.url} />
                ))}
            </div>
        );
    }
}