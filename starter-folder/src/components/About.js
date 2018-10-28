import React, { Component } from 'react';
import '../App.css';
// import { Button } from 'react-bootstrap';



class About extends Component {
  render() {
    return (
      <div >
<header>

    <link href="https://fonts.googleapis.com/css?family=Advent+Pro:100" rel="stylesheet" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"/>
</header>

{/* <div className="all-background">


</div> */}
<div className="main-background-image">
<div className="circle-image">
<h1>Tony Batuhan Dogan</h1>
<p>Software Developer</p>

</div>

<p className="social-links">
  <a href="https://www.linkedin.com/in/tonybatuhandogan/" target="_blank">
  <span className="fab fa-linkedin the-icon" aria-hidden="true"></span>
  </a>
  <a href="https://www.linkedin.com/in/tonybatuhandogan/" target="_blank">
  <span className="fab fa-github the-icon" aria-hidden="true"></span>
  </a>
  {/* <a href="https://www.linkedin.com/in/tonybatuhandogan/" target="_blank">
  <span className="fab fa-linkedin the-icon" aria-hidden="true"></span>
  </a> */}
</p>
</div>





    <div className="project-down">
        <h1 id="h1-tag">Main projects</h1>


      <div>
          <h1>Head Jump</h1>

      </div>


    </div>




      </div>
    );
  }
}

export default About;
