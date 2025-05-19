import React from 'react';

function AboutComponent() {
    return (
        <div className="about-content">
            <div className="about-text">
                <p>
                    I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies.
                    My journey in software development has equipped me with the skills to create efficient, scalable, and user-friendly applications.
                </p>
                <p>
                    With a keen eye for detail and a commitment to writing clean, maintainable code,
                    I strive to deliver solutions that not only meet but exceed client expectations.
                </p>
                <p>
                    When I'm not coding, I'm constantly learning and exploring new technologies
                    to stay at the forefront of web development trends.
                </p>
            </div>
            
            <div className="about-highlights">
                
                
                <div className="highlight-item">
                    <h3>Experience</h3>
                    <p>X years of professional development experience</p>
                    <p>Specializing in web application development</p>
                </div>
                
                <div className="highlight-item">
                    <h3>Focus Areas</h3>
                    <ul>
                        <li>Full Stack Development</li>
                        <li>Web Application Architecture</li>
                        <li>User Experience Design</li>
                        <li>Performance Optimization</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;