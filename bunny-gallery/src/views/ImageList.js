import React, { Component } from 'react';

export default class ImageList extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     view: views[0]
        // }
    }

    render() {
        const { images } = this.props;
        return (
            <ul>
                {this.props.images.map((image, index) => {
                    return (<li key={index}> <a href={image.url}> {image.title}</a>
                        <p>{image.description}</p>
                    </li>
                    )
                })}
            </ul>
        )
    }
}