import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { plusBunny, minusBunny, fetchBunnies} from './services/bunnies';
import {Thumbnail, List, Gallery} from './components/viewFormats';
import {AddBunny, eliminateBunny, DeleteBunny} from './components/addRemoveBunny';
import qs from 'qs';

function genBunnyList (viewtype, Component) {
    return function bunnyView({ bunnies, onDelete }) {
        bunnyView.PropTypes = {
            bunnies:PropTypes.array.isRequired,
            onRemove:PropTypes.func
        };
        return <div> 
            <div style={{fontWeight:'bold'}}>Bunny {viewtype} </div> 
            <ul>
                {bunnies && bunnies.map(bunny => (
                    <li key={bunny._id}>
                        <Component bunny={bunny} /> 
                        <DeleteBunny onDelete={() => onDelete(bunny)} bunnies={bunnies}/>
                    </li>
                ))}
            </ul>
        </div>;
    };
}
genBunnyList.PropTypes = {
    viewtype:PropTypes.string.isRequired,
    Component:PropTypes.object.isRequired
};
const bunnyDetail = genBunnyList('Detail',List);
const bunnyThumbnail = genBunnyList('Thumbnail',Thumbnail);
function bunnyGallery({ bunny, onDelete }) {
    return <div>
        <div style={{fontWeight:'bold'}}>Bunny Gallery </div>
        <ul>
        
            <Gallery bunny={bunny}/>
            <DeleteBunny onDelete={() => onDelete(bunny)}/>
        </ul>
    </div>;
}
const View = {
    detail: bunnyDetail,
    thumbnail: bunnyThumbnail,
    gallery: bunnyGallery
};
const views = Object.keys(View);
class BunnyApp extends Component {
    constructor() {
        super();
        this.state = {
            bunnies: [],
            view: views[1],
            views: views,
            i: 0,
            bunnyNum: 0,
            loading: true
            
        };
    }
    removeBunny = (bunny) => {
        minusBunny(bunny._id)
            .then(() => {
                this.setState(prevState => ({ 
                    bunnies:eliminateBunny(prevState.bunnies, bunny)
                }));

            });
    }
    addBunny = (title,description,url) => {
        plusBunny(title, description, url)
            .then((res) => {
                this.setState(prevState =>({
                    bunnies:[...prevState.bunnies,res.body]
                }));
            });
    }
    handleChange(target) {
        this.setState({
            title: target.value
        });
    }
    componentDidMount() {
        fetchBunnies()
            .then(res => {
                this.setState(() => ({
                    bunnies: res,
                    loading: false
                }));
            })            
            .catch(error => console.log(error));
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
                    <BunnyView bunnies={bunnies} bunny={bunny} onDelete={this.removeBunny}/>                    
                </section>
                <section>
                    <AddBunny onAdd={this.addBunny}/>
                </section>
            </main>
        );
    }
}
export default BunnyApp;
