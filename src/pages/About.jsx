import React from 'react';
import portfolioData from '../data/portfolioData';
import PageHeader from '../components/PageHeader';
import EducationTimeline from '../components/EducationTimeline';
import AchievementCard from '../components/AchievementCard';
import Icon from '../components/Icons';
import './About.css';

const About = () => {
  return (
    <div className="about-page fade-in">
      {/* Page Header */}
      <PageHeader
        eyebrow="BIOGRAPHY // IDENTITY"
        title="About Me"
        description="First-year Mechanical Engineering undergraduate in Jaipur, driven by an eagerness to understand mechanisms, master design tools, and build practical engineering skills."
      />

      {/* =========================================================================
          SECTION 1: MY STORY (Realistic First-Year Perspective)
         ========================================================================= */}
      <section className="section about-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-meta-column">
              <span className="tech-tag">{portfolioData.story.badge}</span>
              <h2 className="story-headline">{portfolioData.story.headline}</h2>

              <div className="story-meta-cards">
                <div className="card-base story-mini-card">
                  <span className="mini-card-label">CURRENT PHASE</span>
                  <span className="mini-card-value">1st Year B.Tech</span>
                  <span className="mini-card-sub">Foundation & Exploration</span>
                </div>
                <div className="card-base story-mini-card">
                  <span className="mini-card-label">BASE LOCATION</span>
                  <span className="mini-card-value">Jaipur, India</span>
                  <span className="mini-card-sub">{portfolioData.college}</span>
                </div>
                <div className="card-base story-mini-card">
                  <span className="mini-card-label">CORE INTERESTS</span>
                  <span className="mini-card-value">CAD & Mechanics</span>
                  <span className="mini-card-sub">Automobiles & Tech</span>
                </div>
              </div>
            </div>

            <div className="story-paragraphs-column card-base">
              <div className="story-blueprint-header">
                <span className="story-blueprint-tag">DOC_TYPE: PERSONAL_NARRATIVE</span>
                <span className="story-blueprint-date">STATUS: ACTIVE FIRST YEAR</span>
              </div>
              <div className="story-paragraphs">
                {portfolioData.story.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="story-para">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* =========================================================================
          SECTION 2: EDUCATION (Vertical Timeline)
         ========================================================================= */}
      <section className="section education-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="tech-tag">ACADEMIC PATHWAY</span>
              <h2 className="section-title">Education & Qualifications</h2>
            </div>
            <p className="section-subtitle">
              Milestones along my academic foundation in science, mathematics, and mechanical engineering.
            </p>
          </div>

          <div className="education-timeline-wrapper">
            <EducationTimeline educationList={portfolioData.education} />
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* =========================================================================
          SECTION 3: HOBBIES & PURSUITS
         ========================================================================= */}
      <section className="section hobbies-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="tech-tag">PERSONAL DEVELOPMENT</span>
              <h2 className="section-title">Hobbies & Personal Pursuits</h2>
            </div>
            <p className="section-subtitle">
              Activities that build discipline, sharpen curiosity, and maintain physical and mental vitality.
            </p>
          </div>

          <div className="hobbies-grid">
            {portfolioData.hobbies.map((hobby) => (
              <div key={hobby.id} className="card-base hobby-card">
                <div className="hobby-icon-wrap">
                  <Icon name={hobby.icon} size={22} />
                </div>
                <div className="hobby-details">
                  <h3 className="hobby-name">{hobby.name}</h3>
                  <p className="hobby-desc">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* =========================================================================
          SECTION 4: ACHIEVEMENTS & MILESTONES
         ========================================================================= */}
      <section className="section achievements-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="tech-tag">HIGHLIGHTS & RECOGNITION</span>
              <h2 className="section-title">Achievements & Milestones</h2>
            </div>
            <p className="section-subtitle">
              Academic honors, early technical projects, sports recognitions, and college involvements.
            </p>
          </div>

          <div className="achievements-grid">
            {portfolioData.achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
