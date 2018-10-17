import React, { Component } from 'react';
import '../App.css';
// import { Button } from 'react-bootstrap';


class About extends Component {
  render() {
    return (
      <div>


     <div className="about-me-page">

     <h1>What's up, Dear Reader.<br/> I'm Tony Batuhan Dogan,<br/> a Junior Web Developer.</h1>
      <h1 id="different-one">And this is about me page</h1>

<div className="not-container">
  <a data-scroll href="#full">
    <div className="arrow"></div>
  </a>
</div>
{/* <div id="full"></div> */}



     </div>







      </div>
    );
  }
}

export default About;
