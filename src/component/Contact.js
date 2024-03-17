import React from "react";
import Footer from "./footer/Footer";
import "./Contact.css"
function Contact(){
    return(
        <>
        <div className="containerrs">
      
      <div className="contact-info">
      <h1> <u>Contact Us</u></h1>
        <div className="info-item">
          <h2>Mobile  :</h2>
          <p>9791713233</p>
        </div>
        <div className="info-item">
          <h2>Address :</h2>
          <p>25/204, Chinmaynagar, Koyambedu Chennai - 600092</p>
        </div>
        <div className="info-item">
          <h2>Email :</h2>
          <p>skrbusinesssolution@gmail.com</p>
        </div>
      </div>
      <div  className=" map"><iframe width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=25/204%20%20%20,Natesan%20Nagar%20,%20chinmaya%20Nagar,%20koyambedu%20chennnai+(Venue)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
    </div>
        <Footer/>
        </>
    )
}

export default Contact;