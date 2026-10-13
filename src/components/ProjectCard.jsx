import React from 'react';
import Icon from './Icons';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="card-base project-card">
      <div className="project-top">
        <div className="project-category-row">
          <span className="status-badge project-category">{project.category}</span>
          <span className="project-year">{project.year}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
      </div>

      <p className="project-desc">{project.description}</p>

      {project.tech && project.tech.length > 0 && (
        <div className="project-tech-stack">
          {project.tech.map((item, idx) => (
            <span key={idx} className="project-tech-chip">
              {item}
            </span>
          ))}
        </div>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <ul className="project-highlights">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="highlight-item">
              <span className="bullet">▸</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="project-footer">
        <span className={`project-status-pill ${project.status === 'Completed' ? 'completed' : 'in-progress'}`}>
          <Icon name="check-circle" size={12} />
          <span>{project.status}</span>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
