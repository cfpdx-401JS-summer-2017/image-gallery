import React, { Component } from 'react';
import AddBunny from '../Components/AddBunny';
import { List } from '../Components/List';
import { Thumbs } from '../Components/Thumbs';
import { Gallery } from '../Components/Gallery';

function listView({ bunnies, onRemove }) {
    return <div><h2>List View</h2> <List listArray={bunnies} onRemove={onRemove} /> </div>;
}
function thumbView({ bunnies, onRemove }) {
    return <div><h2>Thumbnail View</h2> <Thumbs thumbArray={bunnies} onRemove={onRemove} /> </div>;
}
function galleryView({ bunnies, onRemove, onUpdate, bunnyNum }) {
    return <div><h2>Gallery View</h2> <Gallery galleryArray={bunnies} bunnyNum={bunnyNum} onRemove={onRemove} onUpdate={onUpdate} /> </div>;
}

const viewDict = {
    list: listView,
    thumbs: thumbView,
    gallery: galleryView
}

const viewArray = Object.keys(viewDict);

export class Images extends Component {
    constructor() {
        super();
        this.state = {
            view: viewArray[0],
            views: viewArray
        };
    }

    render() {
        const { bunnies, onRemove, onUpdate, bunnyNum, onAdd } = this.props;
        const ViewWrapper = viewDict[this.state.view];

        return (
            <div>
                <nav>
                    {this.state.views.map(v => (
                        <button key={v} onClick={() => this.setState({ view: v })}>
                            {v}
                        </button>
                    ))}
                </nav>
                <section>
                    <ViewWrapper bunnies={bunnies} bunnyNum={bunnyNum} onRemove={onRemove} onUpdate={onUpdate} />
                </section>
                <section>
                    <AddBunny onAdd={onAdd} />
                </section>
            </div>
        );
    }
}
