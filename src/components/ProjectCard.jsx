import React from 'react';

function ProjectCard({ image, title, description, tech, github, demo }) {
    return (
        <div className="project-card">

            <img
                src={image}
                alt={title}
                className="project-image"
            />

            <div className="project-content">

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="tech-stack">
                    {tech.map((item, index) => (
                        <span className="tag" key={index}>
                            {item}
                        </span>
                    ))}
                </div>

                <div className="project-links">
                    <a href={demo} target='_blank'>Live Demo</a>
                    <a href={github} target='_blank'>GitHub</a>
                </div>

            </div>

        </div>
    );
}

export default ProjectCard;