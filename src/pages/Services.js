import React from 'react';
import './Pages.css';

function Services() {
  const services = [
    { icon: "💻", title: "Web Development", desc: "Custom websites and web apps using React, Node.js, and modern tech." },
    { icon: "📱", title: "Mobile Apps", desc: "Cross-platform mobile development with React Native." },
    { icon: "⚙️", title: "Backend Systems", desc: "APIs, databases, and server-side logic." },
    { icon: "🔧", title: "Code Review", desc: "Help improve existing code quality and performance." }
  ];

  return (
    <div className="page-container">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;