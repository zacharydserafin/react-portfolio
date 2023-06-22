import React from 'react';
import '../../styles/Resume.css';

export default function Resume() {
  return (
    <div className="resume-page">
      <h2 className="resume-title">Resume</h2>
      <p>{'Download my resume '}
        <a href='./assets/documents/resume.pdf' className="resume-link" download="Resume.pdf">here</a>
      </p>
      <div className="card resume-skills">
        <div className="card-header resume-skill-header">
          Featured Skills
        </div>
        <ul className="list-group list-group-flush resume-skill-list">
          <li className="list-group-item skill-list-item">HTML</li>
          <li className="list-group-item skill-list-item">CSS</li>
          <li className="list-group-item skill-list-item">JavaScript</li>
          <li className="list-group-item skill-list-item">Git</li>
          <li className="list-group-item skill-list-item">NodeJS</li>
          <li className="list-group-item skill-list-item">Express.js</li>
          <li className="list-group-item skill-list-item">SQL</li>
          <li className="list-group-item skill-list-item">Sequelize</li>
          <li className="list-group-item skill-list-item">MongoDB</li>
          <li className="list-group-item skill-list-item">Mongoose</li>
          <li className="list-group-item skill-list-item">Webpack</li>
          <li className="list-group-item skill-list-item">React</li>
        </ul>
      </div>
    </div>
  );
}