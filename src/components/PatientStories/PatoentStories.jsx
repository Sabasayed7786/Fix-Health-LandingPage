
import React from 'react';
import './PatientStories.css';

const RecoveryStoriesSection = () => {
  const recoveryStoriesData = [
    {
      patientName: 'Sarah Johnson',
      recoveryDescription:
        'After undergoing physiotherapy sessions for a knee injury, I am thrilled with the progress I made. Thanks to the dedicated team of doctors and therapists, I can now walk pain-free and resume my daily activities.',
    },
    {
      patientName: 'Michael Rodriguez',
      recoveryDescription:
        'As a heart patient, I received exceptional care from the cardiology department. The personalized treatment plan and continuous monitoring helped me regain my cardiovascular health. Grateful for the expert medical team!',
    },
    {
      patientName: 'Lisa Patel',
      recoveryDescription:
        'I want to express my gratitude to the orthopedic surgeons who performed a successful joint replacement surgery. The rehabilitation program was comprehensive, and I now have improved mobility and a better quality of life.',
    },
  ];

  return (
    <div className="recovery-stories-section">
      <p style={{color:"white", fontSize:"35px"}}>Some Patient Recovery Stories</p>
      <p style={{color:"white", fontSize:"20px"}}>Don't just take our word for it</p>
      <div className="recovery-stories-container">
        {recoveryStoriesData.map((story, index) => (
          <div key={index} className="recovery-story">
            <h3>{story.patientName}</h3>
            <p>{story.recoveryDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecoveryStoriesSection;
