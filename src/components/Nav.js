import React from 'react';
import '../styles/Main.css';

// Use currentPage when styling to conditionally set active/non-active link className via ternary
export default function Nav({ currentPage, handlePageChange }) {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nlink-active' : 'nlink'}
                >
                    About Me
                </a>
            </li>
            <li className="list-group-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nlink-active' : 'nlink'}
                >
                    Contact
                </a>
            </li>
            <li className="list-group-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nlink-active' : 'nlink'}
                >
                    Portfolio
                </a>
            </li>
            <li className="list-group-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nlink-active' : 'nlink'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}