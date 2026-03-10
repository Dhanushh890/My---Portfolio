import React from "react";
import { FileDown, FileText } from "lucide-react";

const Resume = ({ resume }) => {
  if (!resume || resume.length === 0) return null;

  const latestResume = resume[0];
  const API_BASE = "http://127.0.0.1:8000";
  const fileUrl = latestResume.file.startsWith("http")
    ? latestResume.file
    : `${API_BASE}${latestResume.file}`;

  const handleDownload = () => {
    const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/";
    // Use the dedicated download endpoint that forces file download
    window.location.href = `${API_BASE}resume/download/`;
  };

  return (
    <section className="section fade-up" id="resume">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">Resume</h2>
          <p>Download my resume to learn more about my qualifications and experience.</p>
        </div>

        <div className="resume-card card">
          <div className="resume-icon-area">
            <div className="resume-icon">
              <FileText size={32} />
            </div>
          </div>
          <div className="resume-info">
            <h3>{latestResume.title}</h3>
            {latestResume.description && (
              <p className="resume-desc">{latestResume.description}</p>
            )}
          </div>
          <button
            onClick={handleDownload}
            className="btn btn-primary resume-download-btn"
          >
            <FileDown size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
