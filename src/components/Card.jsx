import React from 'react';
import './Card.css';

function Card({ profileImage, name, projects }) {
  return (
    <div className="card">
      <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
      <h2>{name}</h2>
      <ul className="projects">
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
