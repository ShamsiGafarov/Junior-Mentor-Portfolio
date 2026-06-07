import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
    alert(`Thanks ${form.firstName}, I'll get back to you soon!`);
    navigate('/');
  };

  return (
    <div className="page-container">
      <h2>Contact Me</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>📧 sgafarov@my.centennialcollege.ca</p>
          <p>📞 (647) 555-1224</p>
          <p>📍 Toronto, Canada</p>
          <p>💼 linkedin.com/in/shamsi</p>
          <p>🐙 github.com/shamsi</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="firstName" placeholder="First name" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} required />
          </div>
          <input type="tel" name="phone" placeholder="Phone number" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email address" onChange={handleChange} required />
          <textarea name="message" placeholder="Your message..." rows="5" onChange={handleChange} required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;