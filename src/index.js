import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './BunnyApp';
import BasicExample from'./routing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
