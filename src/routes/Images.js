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
            bunnies: [],
            bunnyNum: 0
        }
        this.onAdd = this.onAdd.bind(this);
        // this.onRemove = this.onRemove.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentDidMount() {
        fetch('/api/images')
            .then(res => res.json())
            .then(bunnies => this.setState({ bunnies }))
            .catch(error => console.log(error));
    }

    onAdd(title, description, url) {
        fetch('/api/images', {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ title, description, url })
        })
        .then(res => res.json())
        .then(bunny => {
            this.setState({ bunnies: [
                ...this.state.bunnies, 
                bunny
            ] });
        })
        .catch(error => console.log(error));
    }

    // onRemove() {

    // }

    onUpdate(incr) {
        const bunnyCount = this.state.bunnies.length;
        let newBunny = this.state.bunnyNum + incr;
        if (newBunny === bunnyCount) newBunny = 0;
        else if (newBunny === -1) newBunny = bunnyCount-1;
        this.setState ({ bunnyNum: newBunny });
    }

    render() {
        const { bunnies, bunnyNum } = this.state;
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
                    <ViewWrapper bunnies={bunnies} bunnyNum={bunnyNum} onUpdate={this.onUpdate} />
                </section>
                <section>
                    <AddBunny onAdd={this.onAdd} />
                </section>
            </div>
        );
    }
}
