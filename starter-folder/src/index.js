// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { Link } from 'react-router-dom';
// import { Switch, Route, BrowserRouter } from 'react-router-dom';


// ReactDOM.render(
// <BrowserRouter>
// <App />
// </BrowserRouter> 
// , document.getElementById('root'));
// serviceWorker.unregister();



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render((
<Router>
    <App />
</Router>
), document.getElementById('root'));
// registerServiceWorker();
