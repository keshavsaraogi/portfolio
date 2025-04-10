import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">Keshav Saraogi</h1>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/about" className="navbar-link">About</Link>
                    <Link to="/projects" className="navbar-link">Projects</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
