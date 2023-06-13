import React from 'react';

export default function About() {
  const bio = `Zachary D. Serafin is a web developer from Stevens Point, Wisconsin. As an avid lover of music and technology, he channels his creativity and ingenuity into everything he does. Whether it be coding, music production, or any one of the numerous creative hobbies he spends his time on, Zachary always strives to make something unique and fresh. Under the "Portfolio" tab you'll find examples of his work, and if you want your web development team to have a creative powerhouse on board, make sure to reach out via the "Contact" section.`;

  // temporary inline styles
  const styles = {
    image: {
      height: 'auto',
      width: '20%'
    }
  }
  
  return (
    <div>
      <h2>About Me</h2>
      <img src="/assets/images/profile-image.jpg" style={styles.image} alt="Zachary D Serafin"></img>
      <p>{bio}</p>
    </div>
  );
}
