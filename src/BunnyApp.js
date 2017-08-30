import React, { Component } from 'react';
import { bootstrapBunnies, plusBunny, minusBunny, fetchBunnies,requestBunnies} from './services/bunnies';
import {Thumbnail, List, Gallery} from './components/viewFormats';
import AddBunny from './components/AddBunny';
import qs from 'qs';

function genBunnyList (viewtype, Component) {
    return function bunnyView({ bunnies }, onRemove) {
        return <div> 
            <div>Bunny {viewtype} </div> 
            <ul>
                {bunnies && bunnies.map(bunny => (
                    <li key={bunny.id}>
                        <Component bunny={bunny} onRemove={onRemove}/> 
                    </li>
                ))}
            </ul>
        </div>;
    };
}
const bunnyDetail = genBunnyList('Detail',List,deleteBunny);
const bunnyThumbnail = genBunnyList('Thumbnail',Thumbnail,deleteBunny);
function bunnyGallery({ bunny },onRemove) {
    return <div>
        <div>Bunny Gallery </div>
        <ul>
        
            <Gallery bunny={bunny} onRemove={onRemove}/>
        </ul>
    </div>;
}
const View = {
    detail: bunnyDetail,
    thumbnail: bunnyThumbnail,
    gallery: bunnyGallery
};
const views = Object.keys(View);
function deleteBunny(bunny) {
    const histBunnies = this.state.bunnies;
    this.setState({bunnies: minusBunny(histBunnies, bunny)});
}

class BunnyApp extends Component {
    constructor() {
        super();
        this.state = {
            bunnies: [],
            bunny: null,
            view: views[1],
            views: views,
            i: 0,
            bunnyNum: 0,
            loading: true
            
        };
    }
    handleChange(target) {
        this.setState({
            title: target.value
        });
    }
    componentDidMount() {
        fetchBunnies()
            .then(res => {
                console.log(res);
                //need to add an anonymous function?
                this.setState(() => ({
                    bunnies: res,
                    loading: false
                }));
            })
            .then(res => {
                this.setState(() => ({
                    bunny: res[0]
                }));
            })
            
            .catch(error => console.log(error));
    }
addBunny = (title,description,url) => {
    const histBunnies = this.state.bunnies;
    this.setState({bunnies: plusBunny(histBunnies, title, description, url)});
};
updateBunny = newNumb => {
    if(newNumb === this.state.bunnies.length) newNumb = 0;
    if(newNumb === -1) newNumb = this.state.bunnies.length - 1;
    this.setState({
        bunnyNum: newNumb
    });
}
render() {
    const { loading } = this.state;
    if(loading) return <div>Loading...</div>;
    const { bunnies } =this.state;
    const { views } = this.state;
    const queried = qs.parse(this.props.location.search.slice(1));
    const BunnyView = View[queried.view||'thumbnail'];
    let { i } = this.state;
    const bunny = bunnies[i];
    
    return (
        <main>
            <header>
                <h1>Bunny App</h1>
            </header>
            <section>
                {views.map(v => (
                    <button key={v} 
                        onClick={() => {this.props.history.push(`/photos?view=${v}`);}}>
                        {v}
                    </button>
                ))}
                {queried.view === 'gallery' && <section>
                    <button
                        onClick={() => this.setState({i:this.state.i-1})}
                        style={{padding: '10px'}}
                        disabled={this.state.i === 0}
                    >previous
                    </button>
                    <button 
                        onClick={() =>  this.setState({i:this.state.i+1})}
                        style={{padding: '10px'}}
                        disabled={this.state.i===bunnies.length-1}
                    >next
                    </button>
                </section>
                }
                <BunnyView bunnies={bunnies} bunny={bunny} onRemove={this.deleteBunny} onUpdate={this.updateBunny}/>                    
            </section>
            <section>
                <AddBunny onAdd={this.addBunny}/>
            </section>
        </main>
    );
}
}
export default BunnyApp;
