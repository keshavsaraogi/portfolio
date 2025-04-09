import React from 'react';
import '../styling/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">Keshav Saraogi</h1>
                <div className="navbar-links">
                    <a href="#about" className="navbar-link">About</a>
                    <a href="#projects" className="navbar-link">Projects</a>
                    <a href="#contact" className="navbar-link">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;