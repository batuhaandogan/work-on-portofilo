import React, { Component } from 'react';
import '../App.css';
import About from './About'
import { Link } from 'react-router-dom';





class Home extends Component {

  render() {

    return (
     
      <div>

  <div className="main-image-first">
  <p className="animated bounceInDown" id="the-p-tag">The significant problems<br/> we face cannot be solved by the same<br/> level of thinking that created them</p>
 <p className="animated bounceInDown" id="the-second-p-tag">Turn your ideas into reality</p>
 <span class="animated bounce"></span>  

{/* <video src="../Code_flythough.mov" autoPlay="true" loop="true"></video> */}


</div>



<div className="second-home-class"> 
<div className="make-cool-textarea">
<div className="cool-1"></div>
</div>

</div>


</div>

    );
  }
}

export default Home;
