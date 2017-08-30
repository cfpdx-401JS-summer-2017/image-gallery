import React, { Component } from 'react';
import List from '../list/List';
import Thumbnail from '../thumbnail/Thumbnail';
import Gallery from '../gallery/Gallery';
import qs from 'qs';

const View = {
    gallery: Gallery,
    thumbnail: Thumbnail,
    list: List
}

const views = Object.keys(View);

export default class Viewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            view: views[0],
            views: views
        }
    }
    render() {
        console.log('Viewer.js this.state', this.state);

        // const currentView = qs.parse(this.state.location.slice(1)).view || 'list';
        const { views, view } = this.state;
        const BunnyView = View[view];

        return (
            <div>
                {views.map(v => (
                    <button disabled={view === BunnyView} key={view} onClick={() => this.state.history.push({ search: `?view=${view}` })}>
                        {view}
                    </button>
                ))}
                <BunnyView props={this.state} />
            </div>
        )

    }
}