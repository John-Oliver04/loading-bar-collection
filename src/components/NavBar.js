import React from 'react';
import '../styles/NavBarStyles.css';

function NavBar({ className, label, navbars, setCurrentNavbar }) {
  return (
    <nav className={className}>
        {/* STYLE SELECTED */}
        <div className="brand">
            {/* COMBO BOX LIST */}
            <select className='combobox' onChange={(e) => setCurrentNavbar(navbars.find(n => n.id === parseInt(e.target.value)))}>
                {navbars.map((n) => (
                <option key={n.id} value={n.id}>{n.label}</option>
                ))}
            </select>
        </div>


        {/* MENU */}
        <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
    </nav>
  );
}

export default NavBar;
