import React from 'react';
import './NavBar.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';




function NavBar() {
    return <div class="topnav">

    
      <div style={{"margin-top":"-20 px"}}>
        <NavLink
          to= "/"
          exact
          activeStyle= {{background: 'rgb(190, 210, 245)'}}
          >Home</NavLink>
      {/* <a class="active" href="/">Home</a> */}
      
      {/* <a href="#news">News</a> */}
      <NavLink
          to= "/news"
          exact
          activeStyle= {{background: 'rgb(190, 210, 245)'}}
          >News</NavLink>
        
      {/* <a href="#contact">Contact</a> */}
      <NavLink
          to= "/contact"
          exact
          activeStyle= {{background: 'rgb(190, 210, 245)'}}
          >Contact</NavLink>

      {/* <a href="#about">About</a> */}
      <NavLink
          to= "/about"
          exact
          activeStyle= {{background: 'rgb(190, 210, 245)'}}
          >About</NavLink>

    </div>
    

  </div>
}

export default NavBar;