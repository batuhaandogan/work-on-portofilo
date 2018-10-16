import React, { Component } from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>


       
<navbar className="the-navbar-class">
<ul className="main-nav">
  <li >
    <a href="/">Home</a>
  </li>
  <li >
    <a href="/">Profile</a>
  </li>
  <li >
    <a href="/">Contact</a>
  </li>
</ul>
</navbar>



<div className="main-image-first">

<p id="the-p-tag">The significant problems<br/> we face cannot be solved by the same<br/> level of thinking that created them</p>
<p id="the-second-p-tag">Turn your ideas into reality</p>
</div>











      </div>
    );
  }
}

export default App;
