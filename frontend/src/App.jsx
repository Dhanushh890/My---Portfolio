import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/';

function App() {
  const [data, setData] = useState({
    profile: null,
    skills: [],
    projects: [],
    experience: [],
    education: [],
    resume: [],
    contact: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, skillsRes, projectsRes, expRes, eduRes, resumeRes, contactRes] = await Promise.all([
          axios.get(`${API_URL}profile/`),
          axios.get(`${API_URL}skills/`),
          axios.get(`${API_URL}projects/`),
          axios.get(`${API_URL}experience/`),
          axios.get(`${API_URL}education/`),
          axios.get(`${API_URL}resume/`),
          axios.get(`${API_URL}contact/`)
        ]);

        setData({
          profile: profileRes.data[0] || null,
          skills: skillsRes.data,
          projects: projectsRes.data,
          experience: expRes.data,
          education: eduRes.data,
          resume: resumeRes.data,
          contact: contactRes.data[0] || null
        });
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0a0e1a',
        color: '#06b6d4',
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '1.5rem',
        fontWeight: 600
      }}>
        Loading Portfolio...
      </div>
    );
  }

  return (
    <>
        <Navbar profile={data.profile} />
      <main>
        <Hero profile={data.profile} />
        <About profile={data.profile} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Experience experiences={data.experience} />
        <Education education={data.education} />
        <Resume resume={data.resume} />
        <Contact contact={data.contact} />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {data.profile?.name || 'Portfolio'}. Built with Django & React.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
