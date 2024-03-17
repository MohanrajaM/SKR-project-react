import React from "react";
import "./Footer.css"


function Footer(){
    return(
        <div className="footer"> 
          <div className="footer-above section-padding">
            <div className="footer-links">
                <div className="footer-links-div">
                    <h4> Clients</h4>
                    <p> AK Auto Care</p> 
                    <p> WG Motor</p>
                    <p> TM Power Care</p>
                </div>
                <div className="footer-links-div">
                    <h4> Services</h4>
                    <p>Auditing</p>
                    <p>Income Tax</p>
                    <p>Management Consultancy</p>
                    <p>Business Start up Registration</p>
                    <p> Accounting & Other Services</p>
                </div>
                <div className="footer-links-div">
                    <h4>Social Media</h4>
                    <div className="socialmedia">
                    <p>Facebook</p>
                    <p>Whatsapp</p>
                    <p>Instagram</p>
                    <p>Email</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="footer-below">
                <div className="footer-copyright">
                    <p>
                        @{new Date().getFullYear()}. All right reserved.
                    </p>
                </div>
                <div className="footer-below-links">
                    <p> MR Technologies pvt ltd </p> </div>

            </div>

           </div>
           

        </div>
    )
}

export default Footer;