import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';


function ContactForm() {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted question:', question);
    setQuestion('');
  };

  return (
  
    <div className="contact-form">
      <h2>Have any questions?</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          rows="5"
          className="question-box"
        />
        <br />
        <button type="submit" className="nav-button">
          Submit
        </button>
      </form>
      <p className="contact-email">
        Contact us at <a href="mailto:safety2025@gmail.com">safety2025@gmail.com</a> for any questions.
      </p>
    </div>
  );
}

function Support() {
  return (
    <div className="blank-page">
      <Header />
      <h1>Support</h1>
      <ContactForm />
    </div>
  );
};

export default Support;
