import React from 'react';
import portfolioData from '../data/portfolioData';
import PageHeader from '../components/PageHeader';
import SkillCard from '../components/SkillCard';
import CertificationCard from '../components/CertificationCard';
import Icon from '../components/Icons';
import './SkillsResume.css';

const SkillsResume = () => {
  return (
    <div className="skills-resume-page fade-in">
      {/* Page Header */}
      <PageHeader
        eyebrow="CAPABILITIES // CREDENTIALS"
        title="Skills & Resume"
        description="A calibrated breakdown of my technical proficiencies, engineering competencies, certified credentials, and formal resume."
      />

      {/* =========================================================================
          SECTION 1: SKILLS WITH ANIMATED BARS (Configured from portfolioData.js)
         ========================================================================= */}
      <section className="section skills-section">
        <div className="container">
          <div className="skills-header-row">
            <div>
              <span className="tech-tag">CALIBRATED PROFICIENCY</span>
              <h2 className="section-title">Technical & Engineering Skills</h2>
            </div>
            <p className="skills-header-note">
              Proficiency levels reflect first-year coursework and practical project application.
            </p>
          </div>

          <div className="skills-grid">
            {portfolioData.skills.map((skill, index) => (
              <SkillCard key={skill.id || index} skill={skill} index={index} />
            ))}
          </div>

          {/* Technical Calibration Note */}
          <div className="skills-calibration-note card-base">
            <Icon name="gear" size={18} />
            <div className="calibration-text">
              <span className="calibration-heading">Foundational Skills in Progress:</span>
              <p>
                As a first-year undergraduate student at JECRC University, these metrics represent developing skills, digital tools, and foundational competencies being actively cultivated through coursework and practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* =========================================================================
          SECTION 2: RESUME DOWNLOAD SECTION
         ========================================================================= */}
      <section className="section resume-download-section">
        <div className="container">
          <div className="resume-box card-base">
            {/* Blueprint corner brackets */}
            <div className="corner-bracket top-left" />
            <div className="corner-bracket top-right" />
            <div className="corner-bracket bottom-left" />
            <div className="corner-bracket bottom-right" />

            <div className="resume-content-left">
              <span className="tech-tag">CURRICULUM VITAE</span>
              <h3 className="resume-prompt-title">Want to know more about me?</h3>
              <p className="resume-prompt-desc">
                Download my complete academic resume including first-year degree coursework at JECRC University, foundational skills, and student projects.
              </p>

              <div className="resume-specs-list">
                <div className="spec-item">
                  <span className="spec-bullet">✓</span>
                  <span>Format: Portable Document Format (PDF)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-bullet">✓</span>
                  <span>Academic Year: 2026 – 2030 (First Year)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-bullet">✓</span>
                  <span>Degree: B.Tech in Mechanical Engineering (JECRC University)</span>
                </div>
              </div>

              <div className="resume-download-actions">
                <a
                  href={portfolioData.resume}
                  download="Pushkar_Kumar_Resume.pdf"
                  className="btn btn-primary resume-dl-btn"
                >
                  <Icon name="download" size={18} />
                  <span>Download My Resume</span>
                </a>
                <a
                  href={portfolioData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary resume-preview-btn"
                >
                  <Icon name="file-text" size={16} />
                  <span>Preview in Browser</span>
                </a>
              </div>
            </div>

            <div className="resume-preview-card">
              <div className="resume-sheet-preview">
                <div className="sheet-header-mock">
                  <div className="sheet-line mock-title" />
                  <div className="sheet-line mock-sub" />
                </div>
                <div className="sheet-body-mock">
                  <div className="sheet-line" />
                  <div className="sheet-line short" />
                  <div className="sheet-divider-mock" />
                  <div className="sheet-line" />
                  <div className="sheet-line" />
                  <div className="sheet-line short" />
                </div>
                <div className="sheet-badge-overlay">
                  <Icon name="file-text" size={24} />
                  <span>PDF PREVIEW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsResume;
