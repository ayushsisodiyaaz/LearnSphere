import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import  { useState } from "react";
import "../Pages/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Get in Touch with LearnSphere</h2>
      <p>Have questions? Want to enroll in DataSprint? Fill out the form, and our team will get back to you!</p>

      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2> Contact Form</h2>
          
          <TextField id="name" label="FullName" variant="outlined" type="text" name="name" value={formData.name} onChange={handleChange} required/>
          <br></br>
          <br></br>
          <TextField id="email" label="Email" variant="outlined" type="email" name="email" value={formData.email} onChange={handleChange} required/>
          <br></br>
          <br></br>
          <TextField id="phone" label="Phone Number" variant="outlined" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          <br></br>
          <br></br>
          <TextField id="message" label="Message" variant="outlined" name="message" rows="4" value={formData.message} onChange={handleChange} required />
          <br></br>
          <br></br>
          <Button type="submit" variant="outlined">Submit</Button>
        </form>

        <div className="contact-info">
          <h2>Our Location</h2>
          <h3><strong>LearnSphere HQ</strong></h3>
          <h5><AddLocationIcon/>123 AI Street, Tech City, India</h5>
          <h5><EmailIcon/>support@learnsphere.com</h5>
          <h5><ContactPhoneIcon/>+91-9876543210</h5>
         
        <iframe

          src="https://www.google.com/maps/embed/v1/place?q=Prestige+College,+Indore&key=YOUR_MAPS_KEY"
          allowFullScreen
        ></iframe>
      </div>
        </div>
       
      </div>
    
  );
};

export default ContactPage;
