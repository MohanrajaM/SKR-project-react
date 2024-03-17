import "./Navbar.css";
import React from "react";

import { Link } from "react-router-dom";
import logo from "./images/logo1.jpg"
import { useState } from "react";
function    Navbar(){


    const [isMobile, setIsMobile ]=useState(false);
    return(
        <>

        <nav className="navbar">
             <img  className= "logo" src={logo} alt="LOGO"  width={300} height={180}/>

            <ul className= {isMobile ? "nav-mobile-bar" :"nav-link"} onClick={()=>setIsMobile(false)}>
                
                <Link to='/' className="home" ><li >Home</li></Link>
                <Link to='/About'  className="about"><li>About</li></Link>
                <Link to='/Service'  className="service" ><li>Service</li></Link>
                <Link to='/Forms'  className="forms" ><li>Online Enquiry</li></Link>
                <Link to='/Contact'  className="contact"><li>Contact</li></Link>
            
            
            </ul>
            <button className="mobile-menu" onClick={()=>setIsMobile(!isMobile)}>
                {isMobile ? <h1>X</h1> : <h1>=</h1>}
            </button>
            </nav>
            
</>
    )

}

export default Navbar;