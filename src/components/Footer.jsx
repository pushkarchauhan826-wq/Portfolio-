import React from 'react';
import portfolioData from '../data/portfolioData';
import Icon from './Icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-identity">
            <div className="footer-brand">
              <span className="footer-gear">
                <Icon name="gear" size={16} />
              </span>
              <span className="footer-name">{portfolioData.name}</span>
            </div>
            <p className="footer-title">{portfolioData.title}</p>
            <p className="footer-quote">"{portfolioData.footerQuote}"</p>
          </div>

          <div className="footer-meta">
            <div className="footer-coordinates">
              <span className="coord-label">COORDINATES //</span>
              <span className="coord-value">26.9124° N, 75.7873° E (Jaipur)</span>
            </div>
            <div className="footer-social-links">
              {portfolioData.contact.instagram ? (
                <a
                  href={portfolioData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Instagram Profile"
                >
                  <Icon name="instagram" size={18} />
                </a>
              ) : null}
              {portfolioData.contact.linkedin ? (
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                >
                  <Icon name="linkedin" size={18} />
                </a>
              ) : null}
              {portfolioData.contact.github ? (
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                >
                  <Icon name="github" size={18} />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {portfolioData.copyrightYear} {portfolioData.name}. All rights reserved.
          </p>
          <p className="built-tag">
            Designed for Mechanical Engineering & Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
