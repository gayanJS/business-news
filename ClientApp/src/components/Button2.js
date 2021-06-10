import React from 'react';
import { Link } from 'react-router-dom';

export function Button2() {
  return (
    <Link to='Logoutview'>
      <button className='btn'>Sign Out</button>
    </Link>
    
    
  );
}