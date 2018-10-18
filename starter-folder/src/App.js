import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";




class App extends Component {
  
  render() {
    return (
      
    
      <div>
          <head>
               <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
          </head>

<Navbar />


         <Switch>
          <Route exact path='/home' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>















      </div>
    );
  }
}

export default App;
