import React from 'react';
import portfolioData from '../data/portfolioData';
import PageHeader from '../components/PageHeader';
import CertificationCard from '../components/CertificationCard';
import AchievementCard from '../components/AchievementCard';
import Icon from '../components/Icons';
import './SkillsResume.css';
import './About.css';

const Certifications = () => {
  return (
    <div className="certifications-page fade-in">
      <PageHeader
        eyebrow="MILESTONES // CREDENTIALS"
        title="Certifications & Achievements"
        description="A dedicated space to track verified credentials, course completions, and collegiate milestones as my engineering journey progresses."
      />

      {/* Certifications Section */}
      <section className="section certs-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="tech-tag">LEARNING TRACK</span>
              <h2 className="section-title">Certifications & Courses</h2>
            </div>
            <p className="section-subtitle">
              Formal modules and training undertaken alongside B.Tech coursework. (Easily updated in portfolioData.js).
            </p>
          </div>

          <div className="certs-grid">
            {portfolioData.certifications.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Achievements Section */}
      <section className="section achievements-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="tech-tag">MILESTONES</span>
              <h2 className="section-title">Academic & Campus Milestones</h2>
            </div>
            <p className="section-subtitle">
              Key college achievements, student club participations, and first-year milestones at JECRC University.
            </p>
          </div>

          <div className="achievements-grid">
            {portfolioData.achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>

          {/* Updatable Notice */}
          <div className="card-base" style={{ marginTop: '36px', display: 'flex', alignItems: 'center', gap: '14px', backgroundColor: 'var(--bg-card)' }}>
            <Icon name="check-circle" size={20} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)' }}>
              <strong>Notice:</strong> This section is maintained in <code>src/data/portfolioData.js</code>. As you complete workshops, hackathons, CAD trainings, or sports events at JECRC University, new cards can be added instantly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
