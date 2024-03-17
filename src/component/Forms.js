import React from "react";
import Footer from "./footer/Footer";
import { useState } from "react";
import "./Forms.css"
function Forms(){
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log( " data : ",formData);
        
        setFormData({
          name: '',
          mobile: '',
          email: '',
          message: ''
        });
      };
    
      return (
        <div>
        <div className="container">
  <h2 className=" forms1">Online Enquiry Form</h2>
  <form onSubmit={handleSubmit} className="form">
    <div className="form-group">
      <label >Name:</label>
      <input
        type="text"
        
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="form-control"
        required
      />
    </div>
    <div className="form-group">
      <label >Mobile No:</label>
      <input
        type="text"
        
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        className="form-control"
        required
      />
    </div>
    <div className="form-group">
      <label >Email ID:</label>
      <input
        type="email"
        
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="form-control"
        required
      />
    </div>
    <div className="form-group">
      <label >Message:</label>
      <textarea
       
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="form-control"
        required
      ></textarea>
    </div>
    <button type="submit" className="btn-submit">Submit</button>
  </form>
  
</div>

<br></br>
<Footer />
</div>)

}

export default Forms;