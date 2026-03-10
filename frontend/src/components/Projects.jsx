import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Projects</h2>
          <span className="accent-bar"></span>
        </div>
        <div className="grid-2 fade-up fade-up-d1">
          {projects.map((project) => (
            <div key={project.id} className="card project-card">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.short_description}</p>

              <div className="project-tech">
                {project.technologies.split(',').map((tech, i) => (
                  <span key={i}>{tech.trim()}</span>
                ))}
              </div>

              <div className="project-links">
                {project.live_link && (
                  <a href={project.live_link} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
                {project.github_link && (
                  <a href={project.github_link} className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: '0.85rem' }} target="_blank" rel="noopener noreferrer">
                    <Github size={15} /> Source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
