import React from 'react';
import '../../styles/About.css';

export default function About() {
  const bio = `Zachary D. Serafin is a web developer from Stevens Point, Wisconsin. As an avid lover of music and technology, he channels his creativity and ingenuity into everything he does. Whether it be coding, music production, or any one of the numerous creative hobbies he spends his time on, Zachary always strives to make something unique and fresh. Under the "Portfolio" tab you'll find examples of his work, and if you want your web development team to have a creative powerhouse on board, make sure to reach out via the "Contact" section.`;
  
  return (
    <div className="card mb-3 text-start about-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="/assets/images/profile-image.jpg" className="img-fluid rounded-start" alt="Zachary D Serafin"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">About Me</h3>
            <p className="card-text">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
