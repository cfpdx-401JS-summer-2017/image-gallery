import React, { Component } from 'react';
import BunnyList from './BunnyList';

function BunnyDetail({ sort }) {
    return <div>Bunny Detail { sort }</div>
}
function BunnyThumbnail({ sort }) {
    return <div>Bunny Thumbnail { sort }</div>
}
function BunnyGallery({ sort }) {
    return <div>Bunny Gallery { sort }</div>
}

const View = {
    detail: BunnyDetail,
    thumbnail: BunnyThumbnail,
    gallery: BunnyGallery
}

const views = Object.keys(View);

class BunnyApp extends Component {
    constructor() {
        super();
        this.state = {
            view: views[0],
            views: views
        };
    }

    render() {
        const { views, view } = this.state;
        const MovieView = View[view];

        return (
            <main>
                <header>
                    <h1>Bunny App</h1>
                </header>
                <section>
                    {views.map(v => (
                        <button key={v} onClick={() => this.setState({ view: v })}>
                            {v}
                        </button>
                    ))}
                </section>

            </main>
        );
    }
}
export default BunnyApp
