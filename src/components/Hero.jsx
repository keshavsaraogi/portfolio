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
                        Hi, I'm <span className="highlight">YourName</span> <span className="wave">👋</span>
                    </h1>
                    <h2 className="hero-subtitle">I'm a Full Stack Developer.</h2>

                    <ul className="hero-details">
                        <li>☕ Fueled by coffee</li>
                        <li>🌎 Based in the US</li>
                        <li>💻 Systems Engineer at Google</li>
                        <li>✉️ yourname@gmail.com</li>
                    </ul>

                    <div className="hero-icons">
                        <a href="#"><i className="fab fa-github"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
