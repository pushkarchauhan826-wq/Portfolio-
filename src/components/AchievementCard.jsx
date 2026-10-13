import React from 'react';
import Icon from './Icons';
import './AchievementCard.css';

const AchievementCard = ({ achievement }) => {
  return (
    <div className="card-base achievement-card">
      <div className="achievement-card-top">
        <div className="achievement-icon-wrap">
          <Icon name={achievement.icon || 'award'} size={20} />
        </div>
        <div className="achievement-badges">
          {achievement.category && (
            <span className="status-badge achievement-category">
              {achievement.category}
            </span>
          )}
          <span className="achievement-year">{achievement.year}</span>
        </div>
      </div>

      <div className="achievement-body">
        <h3 className="achievement-title">{achievement.title}</h3>
        <p className="achievement-desc">{achievement.description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
