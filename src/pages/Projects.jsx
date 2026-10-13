import React from 'react';
import portfolioData from '../data/portfolioData';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import Icon from '../components/Icons';
import './About.css';

const Projects = () => {
  return (
    <div className="projects-page fade-in">
      <PageHeader
        eyebrow="ACADEMIC & PRACTICAL WORK"
        title="Projects"
        description="A showcase of my academic, lab, and self-directed engineering projects undertaken during my B.Tech studies at JECRC University."
      />

      <section className="section projects-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="tech-tag">PROJECT PORTFOLIO</span>
              <h2 className="section-title">Academic & Technical Projects</h2>
            </div>
            <p className="section-subtitle">
              Documenting practical work, digital builds, and college workshop implementations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Note on upcoming projects */}
          <div className="card-base" style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'var(--bg-accent-subtle)', borderColor: 'var(--accent-light)' }}>
            <Icon name="gear" size={24} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
            <div>
              <strong style={{ color: 'var(--accent-primary)', fontSize: '0.9375rem' }}>Upcoming Project Space:</strong>
              <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                As semester coursework, lab practicals, and workshop fabrications at JECRC University continue, new technical reports, CAD models, and mechanism prototypes will be added here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
