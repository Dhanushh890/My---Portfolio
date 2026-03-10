import React from 'react';

const Experience = ({ experiences }) => {
  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Experience & Internships</h2>
          <span className="accent-bar"></span>
        </div>

        <div className="timeline fade-up fade-up-d1">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                    {exp.is_internship && (
                      <span className="internship-badge">Internship</span>
                    )}
                  </div>
                  <span className="exp-date">
                    {new Date(exp.start_date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                    {' — '}
                    {exp.end_date ? new Date(exp.end_date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) : 'Present'}
                  </span>
                </div>
                <div className="exp-desc">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
