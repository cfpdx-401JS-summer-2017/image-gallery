import React, { Component } from 'react';
//import BunnyList from './BunnyList';
import { bootstrapBunnies } from './services/bunnies'
import {Thumbnail, List, Gallery} from './components/viewFormats'


//import Thumbnail from './components/thumbnail'
// import list from './components/list'
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



 function bunnyGallery({ bunny } ) {
    return <div>
    <div>Bunny Gallery </div>
    <ul>
        
    <Gallery bunny={bunny}/>
    </ul>
    </div>
}

const View = {
    detail: bunnyDetail,
    thumbnail: bunnyThumbnail,
    gallery: bunnyGallery
}

const views = Object.keys(View);
const bunnies = bootstrapBunnies();

class BunnyApp extends Component {
    constructor() {
        super();
        this.state = {
            bunnies: bunnies,
            bunny: bunnies[0],
            view: views[1],
            views: views,
            i: 0

        };
    }
    

    render() {
        const { views, view } = this.state;
        const BunnyView = View[view];
        const { bunnies } = this.state;
        let { i } = this.state;
        const bunny = bunnies[i];
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
                    <section>
                    <button                      
                    onClick={() => this.setState({i:this.state.i-1})}
                        style={{padding: '10px'}}
                        disabled={this.state.i === 0}
                        >previous
                    </button>
                    <button 
                    onClick={() =>  this.setState({i:this.state.i+1})}
                        style={{padding: '10px'}}
                        disabled={this.state.i==bunnies.length-1}
                        >next
                    </button>
                    </section>
                    <BunnyView bunnies={bunnies} bunny={bunny}/>
                    
                </section>
                {/* <section>
                    <BunnyList view={BunnyView} />
                </section> */}

            </main>
        );
    }
}
export default BunnyApp
