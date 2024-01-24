import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
    const faqs = [
        {
          question: 'What is physiotherapy?',
          answer: 'Physiotherapy is a healthcare profession that helps people recover from injuries, manage chronic conditions, and improve overall well-being through physical interventions.',
        },
        {
          question: 'How long does a typical physiotherapy session last?',
          answer: 'The duration of a physiotherapy session can vary but is typically around 30 to 60 minutes. The exact time depends on the nature of the condition being treated and the specific treatment plan.',
        },
        {
          question: 'Are physiotherapy sessions painful?',
          answer: 'Physiotherapy sessions are designed to alleviate pain and discomfort, not cause it. However, some therapeutic exercises or techniques may cause temporary discomfort. It is essential to communicate openly with your physiotherapist about any pain or concerns during the session.',
        },
        {
          question: 'How many physiotherapy sessions will I need?',
          answer: 'The number of sessions required depends on the individuals condition, the severity of the problem, and how well the patient responds to treatment. Your physiotherapist will discuss a treatment plan and provide an estimate based on your specific needs.',
        },
        {
          question: 'Is physiotherapy only for athletes?',
          answer: 'No, physiotherapy is not exclusive to athletes. While athletes often use physiotherapy to recover from sports injuries, physiotherapists help people of all ages and fitness levels manage various conditions, including chronic pain, mobility issues, and post-surgery recovery.',
        },
        {
          question: 'What conditions can physiotherapy help with?',
          answer: 'Physiotherapy can assist in managing a wide range of conditions, including musculoskeletal issues (back pain, arthritis), neurological disorders (stroke, Parkinson’s), respiratory problems, and more. Your physiotherapist will assess your condition and create a personalized treatment plan.',
        },
        {
          question: 'Is a referral from a doctor required for physiotherapy?',
          answer: 'In many cases, you can directly access physiotherapy without a doctors referral. However, some insurance plans or healthcare systems may require a referral. Check with your healthcare provider or physiotherapy clinic for specific requirements.',
        },
        {
          question: 'Can I do physiotherapy at home?',
          answer: 'While certain exercises and stretches can be done at home, it is essential to consult with a physiotherapist first. They can provide guidance on the appropriate exercises, techniques, and frequency based on your specific needs and condition.',
        },
        {
          question: 'What should I wear to a physiotherapy session?',
          answer: 'Wear comfortable, loose-fitting clothing that allows the physiotherapist easy access to the area being treated. Athletic wear or clothing that does not restrict movement is usually suitable. Your physiotherapist will provide guidance if specific attire is required for certain exercises or treatments.',
        },
        {
          question: 'How do I schedule a physiotherapy appointment?',
          answer: 'To schedule a physiotherapy appointment, you can contact a physiotherapy clinic directly. Some clinics may also offer online scheduling. If you have a doctors referral, provide that information when scheduling. Be prepared to share details about your condition and any relevant medical history.',
        },
      ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>FAQ's</h2>
      <div className="accordion-container">
        {faqs.map((faq, index) => (
          <div className={`accordion-item ${activeIndex === index ? 'active' : ''}`} key={index}>
            <div className="accordion-title" onClick={() => toggleAccordion(index)}>
              <h4>{faq.question}</h4>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className="accordion-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
