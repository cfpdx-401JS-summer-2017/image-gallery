import React, { Component } from 'react';
import AddBunny from '../components/images/AddBunny';
import { List } from '../components/images/List';
import { Thumbs } from '../components/images/Thumbs';
import { Gallery } from '../components/images/Gallery';
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

    constructor(props) {
        super(props);
        this.state = {
            bunnies: []
        }
    }

    componentDidMount() {
        fetch('/api/images')
            .then(res => res.json())
            .then(bunnies => this.setState({ bunnies }))
            .catch(error => console.log(error));
    }

    render() {
        const { bunnies } = this.state;
        const { match, location } = this.props;
        const view = qs.parse(location.search.slice(1)).view;
        const ViewWrapper = viewDict[view];

        return (
            <div>
                <nav id="subNav">
                    <ul>
                        {
                            viewArray.map(v =>
                                <li key={v}><Link to={`${match.url}?view=${v}`}>
                                    {v}</Link></li>
                            )
                        }
                    </ul>
                </nav>
                <section>
                    <ViewWrapper bunnies={bunnies} />
                </section>
                <section>
                    <AddBunny />
                </section>
            </div>
        );
    }
}
