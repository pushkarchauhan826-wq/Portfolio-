import React from 'react';
import Icon from './Icons';
import './ContactCard.css';

const ContactCard = ({ type, title, value, href, actionLabel = 'Connect' }) => {
  const isExternal = href?.startsWith('http');

  const content = (
    <div className="card-base contact-card">
      <div className="contact-icon-box">
        <Icon name={type} size={22} />
      </div>

      <div className="contact-info">
        <span className="contact-type-label">{title}</span>
        <span className="contact-val">{value}</span>
      </div>

      {href ? (
        <span className="contact-action-btn">
          <span>{actionLabel}</span>
          <Icon name={isExternal ? 'external-link' : 'arrow-right'} size={14} />
        </span>
      ) : (
        <span className="contact-static-pill">Location</span>
      )}
    </div>
  );

  if (!href) {
    return <div className="contact-card-wrapper">{content}</div>;
  }

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="contact-card-link"
    >
      {content}
    </a>
  );
};

export default ContactCard;
