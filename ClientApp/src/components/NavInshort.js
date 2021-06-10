import React from "react";
import './NavInshort.css';
import HamburgerDrawer from './HamburgerDrawer';

const NavInshort = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

     
    </div>
  );
};

export default NavInshort;