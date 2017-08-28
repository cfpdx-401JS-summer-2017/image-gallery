import React, { Component } from 'react';
import PropTypes from 'prop-types';

ThumbItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    bunny: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
}

export function ThumbItem({ title, description, url, bunny, onRemove }) {
    return (
        <div className="thumbView">
            <a href={url} target="_blank"><img src={url} alt={description} /></a>
            <p>{description}</p>
            <button onClick={() => onRemove(bunny)} >X</button>
        </div>
    );
}

export class Thumbs extends Component {

    static propTypes = {
        thumbArray: PropTypes.arrayOf(PropTypes.object).isRequired,
        onRemove: PropTypes.func.isRequired
    }

    render() {
        const { thumbArray, onRemove } = this.props;
        return (
            <div className="clear">
                {thumbArray.map((bunny, i) => (
                    <ThumbItem key={i} bunny={bunny} title={bunny.title} description={bunny.description} url={bunny.url} onRemove={onRemove} />
                ))}
            </div>
        );
    }
}