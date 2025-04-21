import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3>{question}</h3>
        <span className="faq-toggle">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

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
    </div>
  );
}

function FAQ() {
  return (
    <div className="blank-page">
      <Header />
      <h1>Frequently Asked Questions</h1>
      <div className="faq">
        <FAQItem
          question="What is Swamp Support?"
          answer="Swamp Support provides real-time alerts, emergency contact information, and safety resources to help keep students, staff, and visitors safe on campus."
        />
        <FAQItem
          question="How do I report an emergency?"
          answer="In case of an emergency, open the app and tap the 'Report Emergency' button. Follow the prompts to provide details about the situation, and the appropriate response team will be notified immediately."
        />
        <FAQItem
          question="Is my personal information safe?"
          answer="Absolutely. Swamp Support adheres to strict privacy and data protection policies set by the University of Florida. Your personal information is encrypted and securely stored."
        />
        <FAQItem
          question="Who do I contact for support?"
          answer="If you have any issues or questions, please contact the UF Campus Safety team at (xxx) xxx-xxxx or email safety@ufl.edu for prompt assistance."
        />
      </div>
    </div>
  );
}

export default FAQ;
