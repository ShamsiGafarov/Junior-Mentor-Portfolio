import React from 'react';
import './Pages.css';

// Your photo - change path if needed
import profilePic from '../assets/me.JPG';

function About() {
  return (
    <div className="page-container">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-image">
          <img src={profilePic} alt="Shamsi Gafarov" />
        </div>
        <div className="about-text">
          <h3>Shamsi Gafarov</h3>
          <div className="about-title">Full-Stack Software Engineering Developer</div>
          <p>
            I'm a Software Engineering Developer with over 10 years of experience building enterprise applications. 
            I've worked at Wix, Apollo Solutions, BMO, and the Central Bank of Azerbaijan. 
            I focus on full-stack development using React, Node.js, and C#.
          </p>
          <p>
            I like solving hard problems and making complex systems simple. 
            Outside of work, I play soccer and read tech blogs.
          </p>
          
          <div className="experience-section">
            <h4>Work Experience</h4>
            
            <div className="exp-card">
              <div className="exp-title">Software Engineer</div>
              <div className="exp-company">Wix</div>
              <div className="exp-date">2023 - 2026</div>
            </div>
            
            <div className="exp-card">
              <div className="exp-title">Senior Software Engineer</div>
              <div className="exp-company">Apollo Solutions</div>
              <div className="exp-date">2020 - 2023</div>
            </div>
            
            <div className="exp-card">
              <div className="exp-title">Software Developer</div>
              <div className="exp-company">BMO Financial Group</div>
              <div className="exp-date">2017 - 2019</div>
            </div>
            
            <div className="exp-card">
              <div className="exp-title">Java Developer</div>
              <div className="exp-company">Central Bank of Azerbaijan</div>
              <div className="exp-date">2013 - 2015</div>
            </div>
          </div>
          
        <a href={require('../assets/RESUME.docx')} className="resume-link" download="Shamsi_Resume.docx">
            📄 Download Resume (DOCX)
            </a>
        </div>
      </div>
    </div>
  );
}

export default About;