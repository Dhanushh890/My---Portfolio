import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Education</h2>
          <span className="accent-bar"></span>
        </div>
        <div className="grid-2 fade-up fade-up-d1">
          {education.map((edu) => (
            <div key={edu.id} className="card edu-card">
              <div className="edu-icon">
                <GraduationCap size={26} />
              </div>
              <div className="edu-info">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <span className="edu-date">
                  <Calendar size={14} />
                  {new Date(edu.start_date).getFullYear()}
                  {' - '}
                  {edu.end_date ? new Date(edu.end_date).getFullYear() : 'Present'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
