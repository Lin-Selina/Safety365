import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Support() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted form:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="blank-page">
      <Header />
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Feel free to use the form or drop us an email. Old-fashioned phone calls work too.</p>
          <p><FaPhone /> &nbsp; 352-392-1111</p>
          <p><FaEnvelope /> &nbsp; <a href="mailto:safety2025@gmail.com">safety2025@gmail.com</a></p>
          <p><FaMapMarkerAlt /> &nbsp;University of Florida, Gainesville, FL</p>
        </div>

        <form className="contact-form-layout" onSubmit={handleSubmit}>
          <div className="name-row">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="example@ufl.edu"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Type your message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Support;
