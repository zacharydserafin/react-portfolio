import React from 'react';
import '../../styles/Resume.css';

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>{'Download my resume '}
        <a href='/assets/documents/resume.pdf' download="Resume.pdf">here</a>
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Git</li>
        <li>NodeJS</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Webpack</li>
        <li>React</li>
      </ul>
    </div>
  );
}