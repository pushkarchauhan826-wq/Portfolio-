import React from 'react';
import Icon from './Icons';
import './CertificationCard.css';

const CertificationCard = ({ cert }) => {
  return (
    <div className="card-base cert-card">
      <div className="cert-top">
        <div className="cert-badge-row">
          <span className="status-badge cert-date">
            <Icon name="check-circle" size={12} />
            <span>{cert.date}</span>
          </span>
          <span className="cert-verified-tag">VERIFIED CREDENTIAL</span>
        </div>
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>
      </div>

      <p className="cert-desc">{cert.description}</p>

      <div className="cert-actions">
        <a
          href={cert.credentialUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline cert-view-btn"
        >
          <span>View Certificate</span>
          <Icon name="external-link" size={14} />
        </a>
      </div>
    </div>
  );
};

export default CertificationCard;
