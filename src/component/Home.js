import React from "react";
import "./Home.css"
import Footer from "./footer/Footer";
import imge1 from "./nav/images/img1.jpg";
import imge2 from "./nav/images/img2.jpg";
import imge3 from "./nav/images/img3.jpg";
function Home(){
    return(

        <>
        
        <div className="containerr">
      <div className="sidebar">
        <img src={imge1} alt="Your Image" />
        <img src={imge2} alt="Your Image" />
        <img src={imge3} alt="Your Image" />
      </div>
      <div className="content">
        <h1>Welcome to SKR Business Solution </h1>
        <h5>
          We established the firm in the year 2019, and have standing experience of more than 5 Years.The firm was started by Mr S. Kavin Raj, B.com., as a proprietorship concern handling Accounting and Taxation matters of small entities and latterconstantly expanded into various divisions like Audit and Assurance, Taxation, Appeals and legal consultancy, Information systems Audit, International taxation, Due diligence, Valuation of entities, Management consultancy etc.
        </h5>
        <h5>
        The firm specializes in various fields and has constantly developed systems and procedures across the industries served. All the clients with our firm are bound with us on a value chain through which they grow over a period of time with advises on various fronts from the firm.
        </h5>
        <br></br>
        <div className="content">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            We are committed to providing consistency in our work and offering solutions for our clients with a strong emphasis on professionalism and the integration of advanced technologies.
          </p>
          <p>
            Our mission is to provide businesses, entrepreneurs, and individuals with the highest quality accounting, auditing, tax planning, and business advisory services. We aim to deliver these services in a timely, efficient, and innovative manner by a professional team that clearly enjoys working together to exceed our clients' needs.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <ul>
            <li>To render competent and personalized services to all our clients.</li>
            <li>To set high standards in the fields of audit, tax advisory, company law matters, and management audits by having an ethical and value-based approach.</li>
            <li>To be the most highly respected professional firm.</li>
          </ul>
        </div>
        <div className="infrastructure">
          <h2>Office Infrastructure</h2>
          <ul>
            <li>Our main office building is located in the heart of the city at Koyambedu in Chennai, covering an area of 2000 sq.ft. We also have a second office at Namakkal.</li>
            <li>Both offices are centrally fully equipped with the latest technology, including telephone lines, 35 mobile lines,  printers, scanner, Xerox machine, fax machine, etc.</li>
            <li>We have 24-hour internet access with high bandwidth to ensure uninterrupted services to our clients.</li>
            <li>Individual email IDs are provided to each employee for proper communication. Additionally, we have a general email ID for query handling.</li>
            <li>We have our own server to store client data securely. Symantec Antivirus software and firewall are installed on every computer for data safety and security.</li>
          </ul>
          <p>
            We have the following divisions for smooth functioning:
          </p>
          <ul>
            <li>Accounts Division</li>
            <li>Audit Division</li>
            <li>Income-tax Division</li>
            <li>Corporate Laws Division</li>
            <li>Sales tax & VAT Division</li>
            <li>Service-tax Division</li>
            <li>Trust Division</li>
            <li>Internal Audit Division</li>
          </ul>
        </div>
      </div>
        {/* Add more content here */}
      </div>
    </div>

        {/*<footer className="footer"> 
    <h4 className="footer_child">
        <ul>
            <li>Home</li>
            <li>About us</li>
        </ul>
    </h4>
    </footer>*/}
    <Footer/>
        </>
    )



}

export default Home;