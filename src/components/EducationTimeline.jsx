import React from 'react';
import Icon from './Icons';
import './EducationTimeline.css';

const EducationTimeline = ({ educationList }) => {
  return (
    <div className="education-timeline">
      {educationList.map((item, index) => (
        <div key={item.id || index} className="timeline-item">
          {/* Vertical Track Marker */}
          <div className="timeline-marker">
            <div className="timeline-node">
              <span className="node-number">0{index + 1}</span>
            </div>
            {index !== educationList.length - 1 && <div className="timeline-stem" />}
          </div>

          {/* Content Card */}
          <div className="timeline-content card-base">
            <div className="timeline-header">
              <div className="timeline-titles">
                <span className="timeline-period-badge">
                  <Icon name="graduation-cap" size={14} />
                  <span>{item.period}</span>
                </span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <h4 className="timeline-institution">
                  {item.institution}
                  {item.location && <span className="institution-loc"> • {item.location}</span>}
                </h4>
              </div>
              {item.status && (
                <span className="status-badge timeline-status">
                  {item.status}
                </span>
              )}
            </div>

            {item.description && (
              <p className="timeline-desc">{item.description}</p>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <div className="timeline-highlights">
                <span className="highlights-label">Key Subjects & Focus:</span>
                <div className="highlights-chips">
                  {item.highlights.map((chip, chipIndex) => (
                    <span key={chipIndex} className="highlight-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;
