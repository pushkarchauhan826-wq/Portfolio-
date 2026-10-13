import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import portfolioData from '../data/portfolioData';
import Icon from './Icons';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Education', path: '/education' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications/Achievements', path: '/certifications' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <NavLink to="/" className="navbar-brand">
          <span className="brand-gear-icon">
            <Icon name="gear" size={18} />
          </span>
          <span className="brand-name">{portfolioData.name}</span>
          <span className="brand-badge">ME • JECRC</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <span className="mobile-menu-title">Navigation</span>
            <span className="mobile-menu-sub">{portfolioData.title}</span>
          </div>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="mobile-nav-item">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  <span>{link.label}</span>
                  <Icon name="chevron-right" size={16} />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-footer">
            <a
              href={portfolioData.resume}
              download="Pushkar_Kumar_Resume.pdf"
              className="btn btn-secondary mobile-resume-btn"
            >
              <Icon name="download" size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
