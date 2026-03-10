import React from 'react';

const About = ({ profile }) => {
  if (!profile) return null;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header fade-up">
          <h2>About Me</h2>
          <span className="accent-bar"></span>
        </div>
        <div className="card about-card fade-up fade-up-d1">
          <p>{profile.about_me}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
