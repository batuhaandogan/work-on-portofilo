import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Bootstrap from "bootstrap/dist/css/bootstrap.css"
// import { Link } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

