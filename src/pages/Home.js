import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <div className="page-container">
      <div className="hero">
        <h1>Hi, I'm Shamsi</h1>
        <div className="tagline">Software Engineering Developer</div>
        <p className="mission">
          I build web applications that solve real problems. 
          Clean code, good design, and things that actually work.
        </p>
        <div className="buttons">
          <Link to="/about" className="btn btn-primary">About Me</Link>
          <Link to="/projects" className="btn btn-secondary">See My Work</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;