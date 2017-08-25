import React, { Component } from 'react';
import AddBunny from '../Components/AddBunny';
import { List } from '../Components/List';
import { Thumbs } from '../Components/Thumbs';
import { Gallery } from '../Components/Gallery';
import { Link } from 'react-router-dom';
import qs from 'qs';

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

    render() {
        const { bunnies, onRemove, onUpdate, bunnyNum, onAdd, match, location } = this.props;
        const view = qs.parse(location.search.slice(1)).view;
        const ViewWrapper = viewDict[view];

        return (
            <div>
                <nav>
                    <ul>
                        {
                            viewArray.map(v =>
                                <li><Link to={`${match.url}?view=${v}`}>
                                    {v}</Link></li>
                            )
                        }
                    </ul>
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
