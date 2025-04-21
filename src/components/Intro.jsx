import React from 'react';
import '../styling/Intro.css';
import profilePic from '../assets/image.jpeg';

const Intro = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-left">
                    <div className="image-wrapper">
                        <img src={profilePic} alt="Profile" className="hero-image" />
                    </div>
                </div>

                <div className="hero-right">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Keshav Saraogi</span>
                        <span role="img" aria-label="waving hand" className="emoji">👋</span>
                    </h1>
                    <ul className="hero-details">
                        <li><span role="img" aria-label="coffee" className="emoji">☕</span> Fueled by Coffee</li>
                        <li><span role="img" aria-label="globe" className="emoji">🌎</span> Based in India</li>
                        <li><span role="img" aria-label="laptop" className="emoji">💻</span> Software Developer Intern at Indorama, Thailand</li>
                    </ul>

                    <div className="hero-icons">
                        <a href="https://github.com/KeshavSaraogi"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/keshav-saraogi/"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/iamkeshavsaraogi/"><i className="fab fa-instagram"></i></a>
                        <a href="mailto:keshavsaraogi04@gmail.com"><i className="fas fa-envelope"></i></a>
                    </div>

                    <div className="about-section">
                        <h2 className="about-title">About Me</h2>

                        <p className="about-description">
                            I'm a passionate software engineer specializing in full stack development and cloud technologies.
                            I enjoy building dynamic, responsive web applications and solving challenging technical problems.
                            With strong skills in React, Node.js, AWS, and Python, I'm eager to contribute to innovative projects.
                            In my free time, I love learning about AI and playing chess.
                        </p>

                        <a href="./resume.pdf" download className="resume-button">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
