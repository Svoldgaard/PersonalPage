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
// replace projects with my own when i am happy with the design
const projects: Project[] = [
    {
        title: "Library app ",
        description: "A simple program which can hold books in a database with a search field and possible to update and delete books.",
        image: myImage, // replace it with picture off the project
        techStack: ["React with typescript", "Postgress", "C# for API and database calls"],
        github: "https://github.com/Svoldgaard/library",
        live: "https://libraryclient.fly.dev",
        hoverText: "Built to visualize a library with own data and APIs i have made in C#.",
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

export const Projects = () => {
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
