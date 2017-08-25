import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import BunnyApp from './BunnyApp';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);
const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/photos">photos</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route path="/photos" component={BunnyApp}/>
        </div>
    </Router>
);

export default BasicExample;