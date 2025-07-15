import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const navbars = [
  { id: 1, className: 'navbar classic-blue', label: 'Classic Blue' },
  { id: 2, className: 'navbar gradient-rounded', label: 'Gradient Rounded' },
  { id: 3, className: 'navbar dark-red', label: 'Dark Red Accent' },
  { id: 4, className: 'navbar minimalist-light', label: 'Minimalist Light' },
  { id: 5, className: 'navbar bubble-green', label: 'Bubble Green' },
  { id: 6, className: 'navbar sunny-top-curve', label: 'Sunny Top Curve' },
  { id: 7, className: 'navbar dashed-indigo', label: 'Dashed Indigo' },
  { id: 8, className: 'navbar bottom-curve-pink', label: 'Bottom Curve Pink' },
  { id: 9, className: 'navbar cyber-dark', label: 'Cyber Dark' },
  { id: 10, className: 'navbar glassmorphism', label: 'Glassmorphism' },
];

function HomePage() {
  const [currentNavbar, setCurrentNavbar] = useState(navbars[0]);

  return (
    <div className="app-container">
      <NavBar
        className={currentNavbar.className}
        label={currentNavbar.label}
        navbars={navbars}
        setCurrentNavbar={setCurrentNavbar}
      />
    </div>
  );
}

export default HomePage;
