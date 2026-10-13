import React, { useState, useEffect } from 'react';
import './SkillCard.css';

const SkillCard = ({ skill, index = 0 }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    // Smooth delay for staggered progress bar filling
    const timer = setTimeout(() => {
      setAnimatedWidth(skill.level);
    }, 150 + index * 80);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  // Generate ASCII-style bar indicator for technical aesthetic
  const totalBlocks = 10;
  const filledBlocks = Math.round((skill.level / 100) * totalBlocks);
  const asciiBar = '█'.repeat(filledBlocks) + '░'.repeat(totalBlocks - filledBlocks);

  return (
    <div className="card-base skill-card">
      <div className="skill-card-top">
        <div className="skill-meta-header">
          <h3 className="skill-title">{skill.name}</h3>
          {skill.category && (
            <span className="status-badge skill-category">{skill.category}</span>
          )}
        </div>
        <span className="skill-level-text">{skill.level}%</span>
      </div>

      <p className="skill-desc">{skill.description}</p>

      <div className="skill-progress-section">
        {/* Animated Modern Bar */}
        <div className="skill-progress-track">
          <div
            className="skill-progress-fill"
            style={{ width: `${animatedWidth}%` }}
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>

        {/* Technical ASCII readout */}
        <div className="skill-ascii-row">
          <span className="skill-ascii-chars">{asciiBar}</span>
          <span className="skill-ascii-label">CALIBRATED</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
