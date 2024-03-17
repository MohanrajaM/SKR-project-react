import Footer from "./footer/Footer";
import React from "react";
import "./Services.css";
function Service(){
    return(

        <>
        <div className="service-page">
            <div className="services">
                <h2>Services</h2>
                <ul>
                    <li>Income Tax</li>
                    <li>Auditing</li>
                    <li>Personal & Corporate Tax</li>
                    <li>DSC</li>
                    <li>GST</li>
                    <li>Representation</li>
                    <li>Loan Projections</li>
                    <li>Registration</li>
                    <li>FSSAI Certificates</li>
                    <li>Business Start Up</li>
                    <li>Accounting & Other Services</li>
                </ul>
            </div>
            <div className="clients">
                <h2>Clients</h2>
                <ul>
                    <li>AK Auto Care</li>
                    <li>WG Motor</li>
                    <li>TM Power Care</li>
                </ul>
            </div>
        </div>
        <Footer/>
        </>
    )



}

export default Service;