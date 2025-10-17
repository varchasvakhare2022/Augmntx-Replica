import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/AugmntX-Logo.png" alt="AugmntX" className="logo-img" />
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#why" className="nav-link">Why</a></li>
            <li className="dropdown">
              <a href="#industries" className="nav-link">
                Industries
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li><a href="#find-dev" className="nav-link">Find Dev</a></li>
            <li><a href="#remote-jobs" className="nav-link active">Remote Jobs</a></li>
            <li><a href="#hire-dev" className="btn btn-primary">Hire Dev</a></li>
            <li><a href="#login" className="nav-link">Login</a></li>
          </ul>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
