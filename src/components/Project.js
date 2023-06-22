import React from 'react';
import '../styles/Portfolio.css';

export default function Project(props) {
  return (
    <div className="row">
      {props.projects.map(project => (
        <div key={project.id} className="col-12 card text-bg-dark project-card">
          <img
          src={project.src}
          className="card-img"
          alt="Screenshot of deployed application"
          />
          <div className="card-img-overlay">
            <a href={project.deployed} className="project-card-text project-card-link mb-2 clickable">{project.title}</a>
            <a href={project.github} className="project-card-text project-card-link clickable">GitHub</a>
          </div>
        </div>
      ))}
    </div>
  );
}