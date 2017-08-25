import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import qs from 'qs';

function Nav({ location }) {

    const currentView = qs.parse(location.search.slice(1)).view || 'list'; 
    
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to={`/images?view=${currentView}`}>Images</Link></li>
            </ul>
        </nav>
    );
}

export default withRouter(Nav);