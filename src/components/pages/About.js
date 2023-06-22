import React from 'react';
import '../../styles/About.css';

export default function About() {
  return (
    <div className="card about-card">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title" id="about-title">About Me</h3>
            <p className="card-text about-text">Zachary D. Serafin is a web developer from Stevens Point, Wisconsin. As an avid lover of music and technology, he channels his creativity and ingenuity into everything he does. Whether it be coding, music production, or any one of the numerous creative hobbies he spends his time on, Zachary always strives to make something unique and fresh. Under the <span className="about-accent">Portfolio</span> tab you'll find examples of his work, and if you want your web development team to have a creative powerhouse on board, make sure to reach out via the <span className="about-accent">Contact</span> section.</p>
          </div>
        </div>
        <div className="col-md-4">
          <img src="./assets/images/profile-image.jpg" className="img-fluid rounded-start" alt="Zachary D Serafin"/>
        </div>
      </div>
    </div>
  );
}
