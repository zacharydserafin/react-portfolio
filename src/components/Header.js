import React from 'react';
import Nav from './Nav';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <h1>Header</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}