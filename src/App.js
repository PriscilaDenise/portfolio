import React from 'react';
import './App.css';
import picture from "./assets/profile.jpeg";
import AboutComponent from "./app/AboutComponent";
import ProjectsComponent from './app/ProjectsComponent';
import SkillsComponent from './app/SkillsComponent';
import ContactComponent from './app/ContactComponent';


function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">PD</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume" className="resume-btn">Resume</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-content">
            <div className="profile-image">
              {/* Add your photo here */}
              <img src={picture} alt="Priscila Denise" />
            </div>
            <h1>Priscila Denise</h1>
            <p className="tagline">Full Stack Developer</p>
            <div className="code-background">
              {/* Code snippets will be added here */}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <AboutComponent />
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <ProjectsComponent />
        </section>

        <section id="skills" className="section">
          <h2>Skills & Tools</h2>
          <SkillsComponent />
        </section>

        <section id="contact" className="section">
          <h2>Get in Touch</h2>
          <ContactComponent />
        </section>

        <section id="resume" className="section">
          <h2>Resume</h2>
          <div className="resume-content">
            <a href="/path-to-your-resume.pdf" className="resume-download" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Priscila Denise. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
