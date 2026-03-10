import React from 'react';

const Navbar = ({ profile }) => {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#home" className="nav-logo">
          {profile?.photo ? (
            <img src={profile.photo} alt={profile.name} className="nav-avatar" />
          ) : (
            <span className="gradient-text">DS</span>
          )}
          <span className="nav-logo-name">{profile?.name?.split(' ')[0] || 'Portfolio'}</span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
