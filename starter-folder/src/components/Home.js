import React, { Component } from 'react';
import '../App.css';
import About from './About'
import { Link } from 'react-router-dom';
import Sample from '../images/Code_flythough.mov';







class Home extends Component {

  render() {

    return (
     
      <div>

  <div >
  <video className='videoTag' autoPlay loop muted>
      {/* <div className="add-opacity">asdasda</div> */}
    <source src={Sample} type='video/mp4'/>
      </video>


      <div className="add-background-opacity">
         <p className="animated bounce" id="the-p-tag">The significant problems<br/> we face cannot be solved by the same<br/> level of thinking that created them</p>
         <p className="animated bounceInDown" id="the-second-p-tag">Turn your ideas into reality</p>
         {/* <p id="my-name">Tony Batuhan Dogan / Software Developer</p> */}
         <span class="animated bounce"></span>  
      </div>


 </div> 



 {/* <div className="second-home-class"> 
<div className="make-cool-textarea">
<div className="cool-1"></div>
</div>
</div>  */}

 </div>

    );
  }
}

export default Home;
