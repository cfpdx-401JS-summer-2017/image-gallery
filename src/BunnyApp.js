import React, { Component } from 'react';
import BunnyList from './BunnyList';
import { bootstrapBunnies } from './services/bunnies'
import {Thumbnail, List, Gallery} from './components/viewFormats'


function genBunnyList (viewtype, Component) {
    return function bunnyView({ bunnies }) {
        return <div> 
            <div>Bunny {viewtype} </div> 
        <ul>
        {bunnies && bunnies.map(bunny => (
          <li key={bunny.id}>
             <Component bunny={bunny}/> 
          </li>
        ))}
      </ul>
      </div>
    }

}

const bunnyDetail = genBunnyList('Detail',List)
const bunnyThumbnail = genBunnyList('Thumbnail',Thumbnail)
const bunnyGallery = genBunnyList('Gallery',Gallery)

const View = {
    detail: bunnyDetail,
    thumbnail: bunnyThumbnail,
    gallery: bunnyGallery
}

const views = Object.keys(View);

class BunnyApp extends Component {
    constructor() {
        super();
        this.state = {
            bunnies: bootstrapBunnies(),
            view: views[1],
            views: views
        };
    }
    

    render() {
        const { views, view } = this.state;
        const BunnyView = View[view];
        const { bunnies } = this.state;
        

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
                    <BunnyView bunnies={bunnies}/>
                </section>
                {/* <section>
                    <BunnyList view={BunnyView} />
                </section> */}

            </main>
        );
    }
}
export default BunnyApp
