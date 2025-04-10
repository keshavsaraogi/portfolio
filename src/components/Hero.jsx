import React from 'react';
import '../styling/Hero.css';
import profilePic from '../assets/image.jpeg';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-left">
                    <img src={profilePic} alt="Profile" className="hero-image" />
                </div>

                <div className="hero-right">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Keshav Saraogi</span>
                        <span role="img" aria-label="waving hand" className="emoji">👋</span>
                    </h1>
                    <h2 className="hero-subtitle">I'm a Full Stack Developer.</h2>

                    <ul className="hero-details">
                        <li>
                            <span role="img" aria-label="coffee" className="emoji">☕</span> Fuled By Coffee
                        </li>
                        <li>
                            <span role="img" aria-label="globe" className="emoji">🌎</span> Based in India
                        </li>
                        <li>
                            <span role="img" aria-label="laptop" className="emoji">💻</span> Software Developer Intern at Indorama, Thailand
                        </li>

                    </ul>

                    <div className="hero-icons">
                        <a href="https://github.com/KeshavSaraogi"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/keshav-saraogi/"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/iamkeshavsaraogi/"><i className="fab fa-instagram"></i></a>
                        <a href="mailto:keshavsaraogi04@gmail.com"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
