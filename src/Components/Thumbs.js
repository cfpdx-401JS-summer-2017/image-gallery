import React, { Component } from 'react';
import PropTypes from 'prop-types';

ThumbItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export function ThumbItem({ title, description, url }) {
    return (
        <div className="thumbView">
            <a href={url} target="_blank"><img src={url} alt={description} /></a>
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
            <div className="clear">
                {thumbArray.map((item, i) => (
                    <ThumbItem key={i} title={item.title} description={item.description} url={item.url} />
                ))}
            </div>
        );
    }
}