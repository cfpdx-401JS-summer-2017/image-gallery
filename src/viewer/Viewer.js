import React, { Component } from 'react';
import List from '../list/List';
import Thumbnail from '../thumbnail/Thumbnail';
import Gallery from '../gallery/Gallery';
import qs from 'qs';
import { NavLink } from 'react-router-dom';
import Bunnies from '../images/bunnies';

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
            addBunny: false,
            bunnies: Bunnies,
            current: 0,
            views: views
        }
    }


    handleClick(name, value) {
        this.setState({
            [name]: value
        })
    }

    cycleView = (value) => {
        const thisImgIndex = this.state.current;

        if (value === "Previous") {
            if (thisImgIndex > 0) {
                this.setState({
                    current: thisImgIndex - 1
                })
            } else {
                this.setState({
                    current: this.state.bunnies.length - 1
                })
            }
        } else {
            if (thisImgIndex === (this.state.bunnies.length - 1)) {
                this.setState({
                    current: 0
                })
            } else {
                this.setState({
                    current: thisImgIndex + 1
                })
            }
        }
    }

    onAdd = (bunny) => {
        this.setState((prevState, props) => {

            const bunniesArray = prevState.bunnies;
            bunniesArray.push(bunny);

            return { bunnies: bunniesArray };
        })
    }

    onRemove = () => {
        this.setState((prevState, props) => {
            const index = this.state.current;
            const bunniesArray = prevState.bunnies;
            const newBunnies = [
                ...bunniesArray.slice(0, index),
                ...bunniesArray.slice(index + 1)
            ]
            const newIndex = index === 0 ? 0 : index - 1;

            return { bunnies: newBunnies, current: newIndex };
        })
    }

    toggleAddForm() {
        this.setState({
            addBunny: !this.state.addBunny
        })
    }


    render() {
        console.log('Viewer.js this.state', this.state);

        const currentView = qs.parse(this.props.location.search.slice(1)).view || 'list';
        const BunnyView = View[currentView];
        console.log('currentView', currentView)

        return (
            <div>
                <ViewSelector views={this.state.views} />
                <BunnyView props={this.state} />
            </div>
        )

    }
}

function ViewSelector({ views }) {
    return (
        <div>
            <h5>view</h5>
            {views.map(view => {
                return <NavLink key={view}
                    to={{ search: `?view=${view}` }}
                    style={{ padding: 10 }}>
                    {view}
                </NavLink>
            })}
        </div>
    );
}