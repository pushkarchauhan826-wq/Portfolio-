import React from 'react';
import portfolioData from '../data/portfolioData';
import PageHeader from '../components/PageHeader';
import EducationTimeline from '../components/EducationTimeline';
import './About.css';

const Education = () => {
  return (
    <div className="education-page fade-in">
      <PageHeader
        eyebrow="ACADEMIC BACKGROUND"
        title="Education"
        description={`Undergraduate engineering studies at ${portfolioData.college}, building core competencies in mechanical principles, basic sciences, and technical tools.`}
      />

      <section className="section education-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="tech-tag">DEGREE PROGRAM</span>
              <h2 className="section-title">{portfolioData.course}</h2>
            </div>
            <p className="section-subtitle">
              Current status: {portfolioData.currentStatus} • Expected Graduation: {portfolioData.expectedGraduation}
            </p>
          </div>

          <div className="education-timeline-wrapper">
            <EducationTimeline educationList={portfolioData.education} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
