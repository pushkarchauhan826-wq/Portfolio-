import React from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData';
import Icon from '../components/Icons';
import SkillCard from '../components/SkillCard';
import './Home.css';

const Home = () => {
  // Grab top 2 skills for a featured teaser on the home page
  const featuredSkills = portfolioData.skills.slice(0, 2);

  return (
    <div className="home-page fade-in">
      {/* =========================================================================
          HERO SECTION (Sophisticated 2-column desktop, stacked mobile)
         ========================================================================= */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* Left Column: Intro & Call to Actions */}
          <div className="hero-content">
            <div className="hero-eyebrow-row">
              <span className="tech-tag">
                <Icon name="gear" size={12} />
                <span>{portfolioData.statusTag}</span>
              </span>
              <span className="status-badge hero-loc-badge">
                <Icon name="mappin" size={12} />
                <span>{portfolioData.location}</span>
              </span>
            </div>

            <h1 className="hero-name">{portfolioData.name}</h1>
            <h2 className="hero-title">{portfolioData.title}</h2>

            <p className="hero-introduction">
              "{portfolioData.introduction}"
            </p>

            <p className="hero-tagline">
              <span className="tagline-bullet">▸</span> {portfolioData.tagline}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <Link to="/about" className="btn btn-primary">
                <span>Explore My Journey</span>
                <Icon name="arrow-right" size={16} />
              </Link>
              <a
                href={portfolioData.resume}
                download="Pushkar_Kumar_Resume.pdf"
                className="btn btn-secondary"
              >
                <Icon name="download" size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Availability status note */}
            <div className="hero-availability">
              <span className="availability-dot" />
              <span>{portfolioData.contact.note || "Open to academic collaborations and project discussions"}</span>
            </div>
          </div>

          {/* Right Column: Profile Photo with Engineering Framing */}
          <div className="hero-visual">
            <div className="profile-frame">
              {/* Technical crosshairs & framing tags */}
              <div className="corner-bracket top-left" />
              <div className="corner-bracket top-right" />
              <div className="corner-bracket bottom-left" />
              <div className="corner-bracket bottom-right" />

              <div className="frame-meta-tag top">
                <span>REF: ME-2026 // STU-01</span>
              </div>

              <div className="profile-image-container">
                <img
                  src={portfolioData.profileImage}
                  alt={portfolioData.name}
                  className="profile-photo"
                  onError={(e) => {
                    // Graceful fallback if user removes or mistypes photo
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="profile-fallback" style={{ display: 'none' }}>
                  <Icon name="gear" size={48} />
                  <span>{portfolioData.name}</span>
                  <small>Profile Photo</small>
                </div>
              </div>

              <div className="frame-meta-tag bottom">
                <span className="frame-status">ACTIVE UNDERGRADUATE</span>
                <span className="frame-coord">JAIPUR, RAJASTHAN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          QUICK HIGHLIGHTS / METRICS TICKER
         ========================================================================= */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {portfolioData.quickHighlights.map((item, idx) => (
              <div key={idx} className="highlight-stat-card">
                <span className="stat-label">{item.label}</span>
                <span className="stat-value">{item.value}</span>
                <span className="stat-subtext">{item.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PREVIEW: WHAT DRIVES ME
         ========================================================================= */}
      <section className="home-preview-section section">
        <div className="container">
          <div className="preview-header">
            <div>
              <span className="tech-tag">FOUNDATIONAL PILLARS</span>
              <h2 className="preview-title">Engineering, Growth & Action</h2>
            </div>
            <p className="preview-subtitle">
              Combining first-principles mechanical reasoning with digital tooling, discipline, and practical college fabrication.
            </p>
          </div>

          <div className="preview-cards-grid">
            <div className="card-base preview-pillar-card">
              <div className="pillar-icon">
                <Icon name="wrench" size={24} />
              </div>
              <h3>Hands-On Mechanics</h3>
              <p>
                Bridging textbook mathematics with physical machines, workshop practice, and CAD prototyping in college labs.
              </p>
              <Link to="/about" className="pillar-link">
                <span>Read Story</span>
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>

            <div className="card-base preview-pillar-card">
              <div className="pillar-icon">
                <Icon name="cpu" size={24} />
              </div>
              <h3>Digital Design & Code</h3>
              <p>
                Developing proficiency in AutoCAD, parametric modeling, and Python scripting for mathematical problem-solving.
              </p>
              <Link to="/skills" className="pillar-link">
                <span>View Skills & Levels</span>
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>

            <div className="card-base preview-pillar-card">
              <div className="pillar-icon">
                <Icon name="dumbbell" size={24} />
              </div>
              <h3>Fitness & Discipline</h3>
              <p>
                Staying physically grounded through regular fitness and athletic pursuits that foster mental focus and resilience.
              </p>
              <Link to="/about" className="pillar-link">
                <span>See Hobbies</span>
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED SKILL TEASER
         ========================================================================= */}
      <section className="section home-skills-teaser">
        <div className="container">
          <div className="teaser-box card-base">
            <div className="teaser-text">
              <span className="tech-tag">TECHNICAL READINESS</span>
              <h2>Hands-on CAD & Scripting Tools</h2>
              <p>
                I track my technical progress with calibrated proficiency levels across mechanical drafting, 3D modeling, and programming.
              </p>
              <Link to="/skills" className="btn btn-primary teaser-btn">
                <span>Explore All Skills & Certifications</span>
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>

            <div className="teaser-skills-list">
              {featuredSkills.map((skill, index) => (
                <SkillCard key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CALL TO ACTION / CONNECT BANNER
         ========================================================================= */}
      <section className="section-sm home-cta-section">
        <div className="container">
          <div className="cta-banner card-base">
            <div className="cta-content">
              <h3>Interested in collaborating or discussing engineering?</h3>
              <p>
                Whether it's a student project, technical competition, or mentorship discussion, I'm always eager to connect.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <span>Let's Connect</span>
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
