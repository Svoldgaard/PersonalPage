import React from "react";
import "../css/Projects.css";
import myImage from "../assets/react.svg"

type Project = {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    github: string;
    live?: string;
    hoverText?: string;
};

const projects: Project[] = [
    {
        title: "Weather App",
        description: "A simple real-time weather dashboard.",
        image: myImage, // replace it with picture off the project
        techStack: ["React", "Node.js", "OpenWeather API"],
        github: "https://github.com/yourname/weather-app",
        live: "https://weatherapp-demo.com",
        hoverText: "Built to visualize live weather data using modern APIs.",
    },
    {
        title: "Task Tracker",
        description: "A full-stack productivity app for managing daily tasks.",
        image: myImage, // replace it with picture off the project
        techStack: ["MongoDB", "Express", "React", "Node.js"],
        github: "https://github.com/yourname/task-tracker",
        live: "https://tasktracker-demo.com",
        hoverText: "An intuitive MERN-based task management tool.",
    },
    {
        title: "Portfolio Website",
        description: "My personal developer portfolio and blog site.",
        image: myImage, // replace it with picture off the project
        techStack: ["Next.js", "TypeScript", "CSS Modules"],
        github: "https://github.com/yourname/portfolio",
        live: "https://yourportfolio.com",
        hoverText: "Built to showcase my skills and projects with a modern design.",
    },
];

export const Projects: React.FC = () => {
    return (
        <section className="projects">
            <h2 className="projects__title">Projects</h2>

            <div className="projects__grid">
                {projects.map((project) => (
                    <div key={project.title} className="project-card">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-card__image"
                        />

                        <div className="project-card__info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-card__tags">
                                {project.techStack.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="project-card__overlay">
                            <h3>{project.title}</h3>
                            <p>{project.hoverText}</p>
                            <div className="project-card__links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
