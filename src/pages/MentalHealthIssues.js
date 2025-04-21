import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';

function MentalHealthIssues() {

  return (
    <div className="blank-page">
      
      <Header />
      
      <h1>Mental Health Awareness</h1>
      <p>
      Mental health affects how we think, feel, and act. It also influences how we handle stress, relate to others, and make choices. Understanding common mental health issues and how to manage them can improve our overall well-being.
      </p>

      <div className="health-box">
        <h2>Common Mental Health Issues</h2>
        <p><strong>Depression:</strong> Persistent sadness, loss of interest, changes in appetite or sleep, and feelings of hopelessness.</p>
        <p><strong>Anxiety Disorders:</strong> Excessive worry, panic attacks, social anxiety, and fear that interferes with daily life.</p>
        <p><strong>Bipolar Disorder:</strong> Episodes of extreme highs (mania) and lows (depression) that impact energy and behavior.</p>
        <p><strong>Post-Traumatic Stress Disorder (PTSD):</strong> Anxiety and flashbacks triggered by a traumatic event.</p>
        <p><strong>Obsessive-Compulsive Disorder (OCD):</strong> Unwanted thoughts and repetitive behaviors that interfere with daily functioning.</p>
      </div>

      <div className="health-box">
        <h2>Signs You May Be Struggling</h2>
        <p>Persistent sadness or hopelessness</p>
        <p>Feeling overwhelmed, anxious, or panicked</p>
        <p>Withdrawal from friends or activities</p>
        <p>Difficulty concentrating or making decisions</p>
        <p>Changes in eating or sleeping patterns</p>
        <p>Feeling worthless or excessively guilty</p>
        <p>Thoughts of self-harm or suicide (please seek help immediately)</p>
      </div>

      <div className="health-box">
      <h2>Ways to Cope and Improve Mental Health</h2>
        <p>Talk to a trusted friend, family member, or counselor</p>
        <p>Stay physically active and eat nutritious meals</p>
        <p>Establish a sleep routine and limit screen time</p>
        <p>Practice mindfulness, meditation, or deep breathing</p>
        <p>Set small, achievable goals to regain motivation</p>
        <p>Avoid drugs and alcohol, which can worsen symptoms</p>
        <p>Engage in hobbies or creative outlets to relieve stress</p>
      </div>
    </div>
  );
}

export default MentalHealthIssues;
