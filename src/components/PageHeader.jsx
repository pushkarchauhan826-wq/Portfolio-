import React from 'react';
import './PageHeader.css';

const PageHeader = ({ eyebrow, title, description }) => {
  return (
    <div className="page-header-wrapper">
      <div className="container">
        {eyebrow && <div className="tech-tag page-header-eyebrow">{eyebrow}</div>}
        <h1 className="page-header-title">{title}</h1>
        {description && <p className="page-header-description">{description}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
