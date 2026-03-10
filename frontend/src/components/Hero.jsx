import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Hero = ({ profile }) => {
  if (!profile) return null;

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content fade-up">
            <p className="hero-label">Hello, I'm</p>
            <h1 className="hero-name">{profile.name}</h1>
            <h2 className="hero-titles">{profile.titles}</h2>
            <p className="hero-intro">{profile.short_intro}</p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                <Mail size={18} /> Contact Me
              </a>
              <a href="#projects" className="btn btn-ghost">
                View Work
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/Dhanushh890" target="_blank" rel="noopener noreferrer">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/Dhanushshankar" target="_blank" rel="noopener noreferrer">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          <div className="hero-photo-area fade-up fade-up-d2">
            <div className="hero-photo-ring">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} />
              ) : (
                <div className="hero-photo-placeholder">
                  <span className="gradient-text">DS</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
