import React from 'react';

const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Technical Skills</h2>
          <span className="accent-bar"></span>
        </div>
        <div className="grid-2 fade-up fade-up-d1">
          {categories.map((category) => (
            <div key={category} className="card">
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-tags">
                {skills.filter(s => s.category === category).map(skill => (
                  <span key={skill.id} className="tag">{skill.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
