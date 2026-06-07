import React from 'react';
import './Pages.css';

function Projects() {
  const projects = [
    {
      title: "WellQuest AI Platform",
      date: "Jan 2026",
      desc: "Built a health tech platform with AI features. Worked on the backend API and frontend React components.",
      role: "Lead Developer",
      outcome: "Platform now used by 3 clinics",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=250&fit=crop"
    },
    {
      title: "Auto Diagnostics Tool",
      date: "Apr 2026",
      desc: "Created a tool that reads car diagnostic data and shows real-time metrics.",
      role: "Solo Developer",
      outcome: "Accurate fault detection",
      img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&h=250&fit=crop"
    },
    {
      title: "Marketplace Indexer",
      date: "May 2026",
      desc: "Built a search optimization tool that speeds up product searches across multiple marketplaces.",
      role: "Backend Developer",
      outcome: "35% faster searches",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=250&fit=crop"
    }
  ];

  return (
    <div className="page-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <img src={p.img} alt={p.title} />
            <div className="project-info">
              <h3>{p.title}</h3>
              <div className="project-date">{p.date}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-role">Role: {p.role}</div>
              <div className="project-outcome">→ {p.outcome}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;