import React from 'react';
import '../styles/Main.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="row justify-content-center">
        <div className="d-flex align-items-center justify-content-center">
          <div className="col footer-logo">
            <a href="https://github.com/zacharydserafin" className="text-center">
              <img src="/assets/icons/github.png" alt="GitHub Logo" className="img-fluid"/>
            </a>
          </div>
          <div className="col footer-logo">
            <a href="https://www.linkedin.com/in/zachary-serafin-34154827b/" className="text-center">
              <img src="/assets/icons/linkedin.png" alt="LinkedIn Logo"  className="img-fluid"/>
            </a>
          </div>
          <div className="col footer-logo">
            <a href="https://twitter.com/ZacharySerafin" className="text-center">
              <img src="/assets/icons/twitter.png" alt="Twitter Logo" className="img-fluid"/>
            </a>
          </div>
        </div>  
      </div>
    </div>  
  );
}