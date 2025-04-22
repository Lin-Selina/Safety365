import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span>{question}</span>
        <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function FAQ() {
  const faqData = [
    { question: "What is Swamp Support?",
      answer: "Swamp Support is a safety platform designed specifically for UF students. It provides emergency alerts, campus safety resources, mental health support, and real-time location features." },
    { question: "How do I report a threat or emergency?",
      answer: "Go to the Home Page and select the Campus Safety & Resources tab. Then you can scroll to the Reporting Suspicious Activity section for a link to report an event to the UPD." },
    { question: "Does Swamp Support track my location at all times?",
      answer: "No. The app only accesses your location when you actively use location-based features like reporting emergencies or viewing nearby incidents." },
    { question: "Can I remain anonymous when reporting?",
      answer: "Yes. The link provided for the reporting will bring you to a page for the UPD that will allow you to report anything anonymously." },
    { question: "What types of alerts will I receive?",
      answer: "You’ll receive real-time alerts about nearby crimes, weather warnings, building evacuations, and other UF campus threats." },
    { question: "Can I access safety resources like mental health help?",
      answer: "Yes. Swamp Support includes direct access to UF mental health resources, hotlines, and coping strategies under the 'Support' tab." },
    { question: "Do I need a UF email to sign up?",
      answer: "Yes, only verified @ufl.edu emails can register for full access to Swamp Support." },
    { question: "Who do I contact for technical support?",
      answer: "If you’re experiencing issues, contact support at support@swampsupport.ufl.edu or call the UF Help Desk at (352) 392-HELP." }
  ];

  // Split into two columns
  const mid = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, mid);
  const rightColumn = faqData.slice(mid);

  return (
    <div className="blank-page">
      <Header />
      <h1>Frequently Asked Questions</h1>
      <div className="faq-columns">
        <div className="faq-column">
          {leftColumn.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className="faq-column">
          {rightColumn.map((item, index) => (
            <FAQItem key={index + mid} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
