import React from 'react';
import '../styles/Main.css';

// Use currentPage when styling to conditionally set active/non-active link className via ternary
export default function Nav({ currentPage, handlePageChange }) {
    return (
        <ul className="list-group list-group-horizontal">
            <li className={`list-group-item list-group-item-action flex-fill text-center position-relative ${currentPage === 'About' ? 'violet-back' : 'plat-back'}`}>
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nlink-active' : 'nlink'}
                >
                    About Me
                </a>
            </li>
            <li className={`list-group-item list-group-item-action flex-fill text-center ${currentPage === 'Contact' ? 'violet-back' : 'plat-back'}`}>
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nlink-active' : 'nlink'}
                >
                    Contact
                </a>
            </li>
            <li className={`list-group-item list-group-item-action flex-fill text-center ${currentPage === 'Portfolio' ? 'violet-back' : 'plat-back'}`}>
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nlink-active' : 'nlink'}
                >
                    Portfolio
                </a>
            </li>
            <li className={`list-group-item list-group-item-action flex-fill text-center ${currentPage === 'Resume' ? 'violet-back' : 'plat-back'}`}>
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