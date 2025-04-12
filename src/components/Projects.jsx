import React from 'react';
import '../styling/Projects.css';
import search from '../assets/search-engine.png'
import math from '../assets/math.png'
import reader from '../assets/document-reader.png'
import database from '../assets/database.png'
import form from '../assets/contact-form.png'
import management from '../assets/management.png'

// Project Data
const projectList = [
    {
        title: "Gen AI Search LLM with Streamlit",
        description: "A custom search engine using Streamlit, Langchain and GROQ, allowing users to search for any information from the web.",
        github: "https://github.com/KeshavSaraogi/search-engine-genAI",
        live: "https://search-llm.streamlit.app/",
        image: search
    },
    {
        title: "Gen AI Math Solver with Streamlit",
        description: "A math solver using Streamlit, Langchain and GROQ, allowing users to solve complex math problems.",
        github: "https://github.com/KeshavSaraogi/math-solver",
        live: "https://math-solver-llm.streamlit.app/",
        image: math,
    },
    {
        title: "PDF Summarizer with Streamlit",
        description: "A PDF summarizer using Streamlit and OpenAI's GPT-4, allowing users to upload a PDF and get a summary.",
        github: "https://github.com/KeshavSaraogi/pdf-query",
        live: "https://document-history-questions.streamlit.app/",
        image: reader,
    },
    {
        title: "SQL Query Generator with Streamlit",
        description: "A SQL query generator using Streamlit and OpenAI's Embeddings and GROQ Inference, allowing users to generate SQL queries from natural language.",
        github: "https://github.com/KeshavSaraogi/sqldb-chat",
        live: "https://datbase-chat.streamlit.app/",
        image: database,
    },
    {
        title: "Document Form Manager MERN Stack",
        description: "A document form manager using React, NodeJS, MongoDB and Express, allowing users to create and manage forms.",
        github: "https://github.com/KeshavSaraogi/form-submission",
        live: "https://form-submission-nine.vercel.app/",
        image: form,
    },
    {
        title: "Inventory Management System MERN Stack",
        description: "An inventory management system using React, NodeJS, MongoDB and Express, allowing users to manage their inventory.",
        github: "",
        live: "",
        image: management,
    },

];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-container">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
