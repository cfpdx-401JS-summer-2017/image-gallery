import React, { Component } from 'react';
import imagesApi from '../../services/imagesApi';

export default function withImages(ComposedComponent) {
    return class ImagesContainer extends Component {
        constructor(props) {
            super(props);
            this.state = {
                images: null,
                error: null
            };
        }

        componentDidMount() {
            imagesApi.getAll()
                .then(images => {
                    this.setState({ images });
                })
                .catch(error => {
                    this.setState({ error });
                });
        }

        handleAdd = (image) => {
            return imagesApi.add(image)
                .then(saved => {
                    this.setState({
                        images: [...this.state.images, saved]
                    });
                });
        }

        handleDelete = (id, index) => {
            return imagesApi.remove(id)
                .then(() => {
                    const { images } = this.state;
                    this.setState({
                        images: [...images.slice(0, index), ...images.slice(index + 1)]
                    });
                });
        }

        render() {
            const { images } = this.state;
            if (!images) return null;

            return <ComposedComponent {...this.props}
                images={images}
                onAdd={this.handleAdd}
                onDelete={this.handleDelete} />;
        }
    };
}
