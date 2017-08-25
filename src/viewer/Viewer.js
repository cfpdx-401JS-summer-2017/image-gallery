import React, { Component } from 'react';
import List from '../list/List';
import Thumbnail from '../thumbnail/Thumbnail';
import Gallery from '../gallery/Gallery';

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

        const { views, view } = this.state;
        const BunnyView = View[view];
        
        return (
            <div>
                {views.map ( v => (
                    <button disabled={v === currentView} key={v} onClick={() => this.setState({views: v})}>
                        {v}
                    </button>
                ))}
                <BunnyView props={this.state} />
            </div>
        )

    }
}