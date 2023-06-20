import React from 'react';
import Nav from './Nav';
import '../styles/Main.css';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div className="header">
      <h1 className="text-center">Zachary D. Serafin</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}