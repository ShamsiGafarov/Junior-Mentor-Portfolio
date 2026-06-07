import React from 'react';
import './Pages.css';

function References() {
  const reviews = [
    {
      name: "Michael Kendrick",
      title: "Tech Lead at Centennial Labs",
      text: "Shamsi delivered quality work on time. Good communication and technical skills."
    },
    {
      name: "Oleksandr Pereimybida",
      title: "Software Engineer at Global Tech",
      text: "Great to work with. Knows React and backend systems well."
    },
    {
      name: "Alamdar Syed",
      title: "Project Partner at Enterprise Solutions",
      text: "Reliable developer. Would definitely work with again."
    }
  ];

  return (
    <div className="page-container">
      <h2>References & Reviews</h2>
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <p className="review-text">"{r.text}"</p>
            <div className="review-name">{r.name}</div>
            <div className="review-title">{r.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default References;