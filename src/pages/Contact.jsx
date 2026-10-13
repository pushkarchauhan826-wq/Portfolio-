import React, { useState } from 'react';
import portfolioData from '../data/portfolioData';
import PageHeader from '../components/PageHeader';
import ContactCard from '../components/ContactCard';
import Icon from '../components/Icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const hasRealEmail = Boolean(portfolioData.contact.email && portfolioData.contact.email.includes('@'));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hasRealEmail) {
      alert("Please update your email in src/data/portfolioData.js to enable the direct contact transmitter.");
      return;
    }
    const mailtoUrl = `mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Hello ${portfolioData.name},\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="contact-page fade-in">
      {/* Page Header */}
      <PageHeader
        eyebrow="COMMUNICATION // INQUIRIES"
        title="Let's Connect"
        description="I'm always open to connecting, learning, collaborating, and discussing new ideas."
      />

      <section className="section contact-main-section">
        <div className="container">
          {/* Top Info Banner */}
          <div className="contact-intro-banner card-base">
            <div className="banner-left">
              <span className="tech-tag">RESPONSE // FAST</span>
              <h3 className="banner-title">First-Year B.Tech Student at JECRC University</h3>
              <p className="banner-desc">
                Open to academic collaborations, college study groups, student club initiatives, and foundational engineering discussions.
              </p>
            </div>
            <div className="banner-right">
              <div className="location-pill">
                <Icon name="mappin" size={16} />
                <span>Jaipur, RJ, India</span>
              </div>
            </div>
          </div>

          <div className="contact-layout-grid">
            {/* Left Column: Contact Cards */}
            <div className="contact-cards-column">
              <h3 className="column-subheading">Direct Contact Channels</h3>

              <div className="contact-cards-stack">
                {/* Email */}
                {portfolioData.contact.email && (
                  <ContactCard
                    type="mail"
                    title="Email"
                    value={portfolioData.contact.email}
                    href={`mailto:${portfolioData.contact.email}`}
                    actionLabel="Send Email"
                  />
                )}

                {/* Phone */}
                {portfolioData.contact.phone && (
                  <ContactCard
                    type="phone"
                    title="Phone"
                    value={portfolioData.contact.phoneDisplay || portfolioData.contact.phone}
                    href={`tel:${portfolioData.contact.phone}`}
                    actionLabel="Call Now"
                  />
                )}

                {/* Address */}
                {portfolioData.contact.address && (
                  <ContactCard
                    type="mappin"
                    title="Campus / Location"
                    value={portfolioData.contact.address}
                  />
                )}

                {/* LinkedIn */}
                {portfolioData.contact.linkedin && (
                  <ContactCard
                    type="linkedin"
                    title="LinkedIn"
                    value="Pushkar Chauhan"
                    href={portfolioData.contact.linkedin}
                    actionLabel="View Profile"
                  />
                )}

                {/* GitHub */}
                {portfolioData.contact.github && (
                  <ContactCard
                    type="github"
                    title="GitHub"
                    value="pushkarchauhan826-wq"
                    href={portfolioData.contact.github}
                    actionLabel="View Code"
                  />
                )}

                {/* Instagram (Only rendered if user provides it) */}
                {portfolioData.contact.instagram && (
                  <ContactCard
                    type="instagram"
                    title="Instagram"
                    value="View Profile"
                    href={portfolioData.contact.instagram}
                    actionLabel="Follow"
                  />
                )}
              </div>
            </div>

            {/* Right Column: Direct Message Form */}
            <div className="contact-form-column">
              <div className="card-base form-wrapper-card">
                <div className="form-header">
                  <span className="form-blueprint-tag">DIRECT INQUIRY // MESSAGE</span>
                  <h3 className="form-title">Send a Quick Note</h3>
                  <p className="form-subtitle">
                    Pre-fills an email draft to {portfolioData.contact.email} using your device's default mail client.
                  </p>
                </div>

                {submitted ? (
                  <div className="form-success-box">
                    <div className="success-icon">
                      <Icon name="check-circle" size={32} />
                    </div>
                    <h4>Draft Initiated!</h4>
                    <p>
                      Your email client was opened with your message draft.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary retry-btn"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="sender-name">Your Name</label>
                        <input
                          id="sender-name"
                          type="text"
                          required
                          placeholder="e.g. Fellow Student / Collaborator"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="sender-email">Your Email</label>
                        <input
                          id="sender-email"
                          type="email"
                          required
                          placeholder="e.g. name@jecrcu.edu.in"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="sender-subject">Subject</label>
                      <input
                        id="sender-subject"
                        type="text"
                        required
                        placeholder="e.g. Academic Project / Student Inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="sender-message">Message</label>
                      <textarea
                        id="sender-message"
                        rows="4"
                        required
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                      <span>Send Message</span>
                      <Icon name="send" size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
