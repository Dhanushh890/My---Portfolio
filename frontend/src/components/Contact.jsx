import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = ({ contact }) => {
  if (!contact) return null;

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Get In Touch</h2>
          <span className="accent-bar"></span>
          <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
        </div>

        <div className="contact-grid fade-up fade-up-d1">
          <a href={`mailto:${contact.email}`} className="card contact-card">
            <div className="contact-icon"><Mail size={26} /></div>
            <h3>Email</h3>
            <span>{contact.email}</span>
          </a>

          <a href={`tel:${contact.phone}`} className="card contact-card">
            <div className="contact-icon"><Phone size={26} /></div>
            <h3>Phone</h3>
            <span>{contact.phone}</span>
          </a>

          <div className="card contact-card">
            <div className="contact-icon"><MapPin size={26} /></div>
            <h3>Location</h3>
            <span>{contact.address}</span>
          </div>
        </div>

        <div className="contact-social-row fade-up fade-up-d2">
          {contact.github_link && (
            <a href={contact.github_link} target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          )}
          {contact.linkedin_link && (
            <a href={contact.linkedin_link} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
