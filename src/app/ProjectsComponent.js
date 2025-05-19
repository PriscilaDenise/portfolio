import React from 'react';

function ProjectsComponent() {
  const projects = [
    {
      title: "Daystar Daycare",
      description: "A full-stack web application built for a daycare center to manage their operations",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/PriscilaDenise/Daystar-Daycare",
      
    },
    {
      title: "CAPSTONE PROJECT",
      description: "The modern job market presents significant challenges for both employers and job seekers. Employers struggle to find qualified candidates efficiently, while job seekers face a fragmented and often overwhelming application process",
      technologies: ["JavaScript" ],
      githubLink: "https://github.com/PriscilaDenise/CAPSTONE-PROJECT",
      
    },
    {
      title: "Wedding verification card system",
      description: "A system which uses QR codes that are scanned to verify guests at a wedding",
      technologies: ["Python"],
      githubLink: "https://github.com/PriscilaDenise/Wedding-verification",
      liveLink: "https://wedding-verification.onrender.com"
    }
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fab fa-github"></i> View Code
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsComponent; 