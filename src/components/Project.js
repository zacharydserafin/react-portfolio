import React from 'react';
import '../styles/Portfolio.css';

export default function Project(props) {
  return (
    <div>
      {props.projects.map(project => (
        <div>
          <img
          src={project.src}
          alt="Screenshot of deployed application"
          />
          <h5>{project.title}</h5>
          <a href={project.github}>Github</a>
          <a href={project.deployed}>Deployed</a>
        </div>
      ))}
    </div>
  );
}