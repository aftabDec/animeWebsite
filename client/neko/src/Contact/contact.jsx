import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../Contact/Contact.css"
const ContactForm = () => {
    // State variables to store form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here, such as sending data to a server
      console.log('Form submitted:', { name, email, message });
      // Clear form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      <div className="contact-form-container">
        <img src="/kaqing.webp" alt="Contact" className="contact-image" />
        <div className="form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="CButton"><button type="submit">Submit</button>
            </div>
            
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactForm;