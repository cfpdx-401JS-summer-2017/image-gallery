import React, { Component } from 'react';
import PropTypes from 'prop-types';

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export function ListItem({ title, description, url, bunny, onRemove }) {
    return (
        <ul>
            <li><h3>{title}</h3></li>
            <li>{description}</li>
            <li><a target="_blank" href={url}>{url}</a></li>
            <button onClick={() => onRemove(bunny)} >X</button>
        </ul>
    );
}

export class List extends Component {

    static propTypes = {
        listArray: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        const { listArray, onRemove } = this.props;
        return (
            <div>
                {listArray.map((bunny, i) => (
                    <ListItem key={i} bunny={bunny} title={bunny.title} description={bunny.description} url={bunny.url} onRemove={onRemove} />
                ))}
            </div>
        );
    }
}