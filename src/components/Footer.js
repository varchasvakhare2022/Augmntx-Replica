import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <img src="/augmntxlogo.png" alt="AugmntX" className="footer-brand-logo" />
          <a
            className="google-play-badge"
            href="https://play.google.com/store/apps/details?id=com.augmntx.app&hl=en-US"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
            <img src="/play_store.svg" alt="Get it on Google Play" />
          </a>
        </div>

        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#corporate">Corporate Information</a></li>
            <li><a href="#press">Press</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>AugmntX</h4>
          <ul>
            <li><a href="#profiles">View Profiles</a></li>
            <li><a href="#discover">Discover</a></li>
            <li><a href="#talent">On Demand Talent</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#data">Augmentation Data</a></li>
            <li><a href="#status">Status</a></li>
            <li><a href="#opt-out">Email Opt-Out</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Vendor</h4>
          <ul>
            <li><a href="#signup">Sign Up</a></li>
            <li><a href="#vendor-login">Vendor Login</a></li>
            <li><a href="#post-job">Post Job</a></li>
            <li><a href="#remote-jobs">Remote Jobs</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">© 2022 - {currentYear} <span className="brand-inline">AugmntX</span> — Labor Omnia Vincit ⚡ by <a href="#superlabs" className="brand-link">SuperLabs</a></p>
          <div className="legal-links">
            <a href="#terms">Terms of Use</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>

      <button
        className="scroll-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
