import React, { Component } from 'react';
import PropTypes from 'prop-types';

ThumbItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export function ThumbItem({ title, description, url }) {
    return (
        <div>
            <img src={url} alt={description} />
            <p>{description}</p>
        </div>
    );
}

export class Thumbs extends Component {

    static propTypes = {
        thumbArray: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        const { thumbArray } = this.props;
        return (
            <div>
                {thumbArray.map((item, i) => (
                    <ThumbItem key={i} title={item.title} description={item.description} url={item.url} />
                ))}
            </div>
        );
    }
}