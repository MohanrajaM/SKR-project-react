import React from "react";
import "./About.css"
import Footer from "./footer/Footer";

import imge2 from "./nav/images/img2.jpg";
import imge3 from "./nav/images/img3.jpg";

function About(){
    return(

        <>
        <div class="about-container">
  <div class="about-sidebar">
    
    <img src={imge2} alt="Your Image" />
    <img src={imge3} alt="Your Image" />
  </div>
  <div class="about-content">
    <div class="about-section">
      <h1><u> About Us</u></h1>
      <h4>We established the firm in the year 2019, and have standing experience of more than 5 Years. The firm was started by Mr. S. Kavin Raj B.com., as a proprietorship concern handling Accounting and Taxation matters of small entities and latter constantly expanded into various divisions like Audit and Assurance, Taxation, Appeals and legal consultancy, Information systems Audit, International taxation, Due diligence, Valuation of entities, Management consultancy etc. The firm specializes in various fields and has constantly developed systems and procedures across the industries served. All the clients with our firm are bound with us on a value chain through which they grow over a period of time with advises on various fronts from the firm.</h4>
    </div>
    <div class="about-section">
      <h4>Our employees are well trained and keep up to date with recent developments in all areas through regular trainings and professional development courses. Since the inception, we have gained our reputation for providing solutions to all of our clients’ problems, and have continued to build on this reputation through the provision of value driven advice on various issues.</h4>
    </div>
    <div class="about-section">
      
      <h1>"We add value to our clients as we believe our own success and growth springs from the success and growth of our clients."</h1>
    </div>
    
  </div>
</div>
        <Footer/>
        </>
    )



}

export default About;