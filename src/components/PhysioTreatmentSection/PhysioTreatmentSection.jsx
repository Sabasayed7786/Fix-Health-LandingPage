
import React from 'react';
import './PhysioTreatmentSection.css';

const PhysioTreatmentSection = () => {
  return (
    <div className="physio-treatment-section">
        <p style={{color:"white", marginTop:"30px", fontSize:"40px"}}>Our Process</p>
        <p style={{color:"white",marginTop:"10px",marginBottom:"60px",fontSize:"20px"}}>Backed by study in International Journal of Physiotherapy and Research</p>
      <h2>Physiotherapy Treatment</h2>
      <div className="methods-container">
        <div className="method">
          <img
            src="https://www.risingtidephysicaltherapy.com/wp-content/uploads/2021/08/therapeutic-exercise.jpg"
            alt="Therapeutic Exercises"
          />
          <h3>Therapeutic Exercises</h3>
          <p>
            Our physiotherapists design personalized exercise programs to
            improve strength, flexibility, and range of motion, tailored to your
            specific condition.
          </p>
          <button className='read-more-button'>Read More</button>
        </div>
        <div className="method">
          <img src="https://uoflhealth.org/wp-content/uploads/2021/11/physical-therapist.jpg" />
          <h3>Manual Therapy</h3>
          <p>
            Hands-on techniques, such as massage and joint mobilization, are
            employed to alleviate pain, reduce muscle tension, and enhance
            physical function.
          </p>
          <button className='read-more-button'>Read More</button>
        </div>
        <div className="method">
          <img src="https://content.blog.neofect.com/2020/05/shutterstock_376434406--1-.jpg" alt="Electrotherapy" />
          <h3>Electrotherapy</h3>
          <p>
            Utilizing electrical stimulation and modalities to manage pain,
            reduce inflammation, and promote tissue healing in a non-invasive
            manner.
          </p>
          <button className='read-more-button'>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default PhysioTreatmentSection;
