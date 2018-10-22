import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/main';
import {Switch , Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';





class App extends Component {
  
  render() {
    return (      
      <div>
          <head>
               <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
          </head>

<Navbar />
{/* <Main /> */}


         <Switch>

          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
        </Switch>



      </div>
    );
  }
}

export default App;
