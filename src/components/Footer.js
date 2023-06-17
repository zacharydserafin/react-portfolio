import React from 'react';
import '../styles/Main.css';

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/zacharydserafin" className="footer-logo">
        <img src="/assets/icons/github.png" alt="GitHub Logo" className="footer-logo"/>
      </a>
      <a href="https://www.linkedin.com/in/zachary-serafin-34154827b/" className="footer-logo">
        <img src="/assets/icons/linkedin.png" alt="LinkedIn Logo" className="footer-logo"/>
      </a>
      <a href="https://twitter.com/ZacharySerafin" className="footer-logo">
        <img src="/assets/icons/twitter.png" alt="Twitter Logo" className="footer-logo"/>
      </a>
    </div>
  );
}