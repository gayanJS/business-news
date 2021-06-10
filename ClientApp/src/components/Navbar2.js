import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar2.css';
import Dropdown from './Dropdown';

function Navbar2() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar2'>
        <Link to className='navbar2-logo' onClick={closeMobileMenu}>
         BIZZNEWS
          
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav2-menu active' : 'nav2-menu'}>
          <li className='nav2-item'>
            {/* <Link to='/' className='nav2-links' onClick={closeMobileMenu}>
              Home
            </Link> */}
          </li>

          
          <li className='nav2-item'>
            <Link to='/BNews2' className='nav2-links' onClick={closeMobileMenu}>
            News
            </Link>
          </li>
         
         
          
          
          
          <li>
            <Link
              to='/sign-up'
              className='nav2-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link></li>
            
        </ul>
        <Button />    
      </nav>
       </>




  );
}

export default Navbar2;