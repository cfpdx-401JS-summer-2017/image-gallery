import React from 'react';
import { 
    NavLink, 
    Route, 
    withRouter, 
    Redirect,
    Switch 
} from 'react-router-dom';
import qs from 'qs';
import Viewer from './viewer/Viewer';
import Home from './home/Home';



function Navigation({ location }) {
    const currentView = qs.parse(location.search.slice(1)).view || 'list';

    return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to={`/bunnies?view=${currentView}`}>Bunnies</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/bunnies" component={Viewer}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    );
}



export default withRouter(Navigation);