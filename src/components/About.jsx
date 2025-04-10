import React from 'react';
import '../styling/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="about-title">About Me</h2>

            <p className="about-description">
                I'm a passionate software engineer specializing in full stack development and cloud technologies.
                I enjoy building dynamic, responsive web applications and solving challenging technical problems.
                With strong skills in React, Node.js, AWS, and Python, I’m eager to contribute to innovative projects.
                In my free time, I love learning about AI and playing chess.
            </p>

            <a href="./resume.pdf" download className="resume-button">
                Download Resume
            </a>
        </section>
    );
};

export default About;
