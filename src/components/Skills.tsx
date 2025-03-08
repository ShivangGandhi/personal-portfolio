import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faAws, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const frontendSkills = [
    "React Native", "React.js", "TypeScript", "JavaScript (ES6+)", "Vue.js", "Redux", "Flutter (Dart)", "Tailwind CSS"
];

const backendSkills = [
    "Node.js", "GraphQL", "Express.js", "Laravel (PHP)", "Spring Boot (Java)", "RESTful APIs"
];

const databaseSkills = [
    "MySQL", "PostgreSQL", "MongoDB", "NoSQL"
];

const devOpsSkills = [
    "GitHub Actions", "Firebase", "AWS", "GCP", "CDN", "Kubernetes", "CI/CD Pipelines"
];

const tools = [
    "Git", "JIRA", "RESTful APIs", "UNIX/Linux", "sentry.io", "Kibana"
];

function Skills() {
    return (
        <div className="container" id="Skills">
            <div className="Skills-container">
                <h1>Skills</h1>
                <div className="Skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Frontend Development</h3>
                        <p>Experienced in building scalable, high-performance web and mobile applications using modern frontend technologies.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {frontendSkills.map((skill, index) => (
                                <Chip key={index} className='chip' label={skill} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faNodeJs} size="3x" />
                        <h3>Backend Development</h3>
                        <p>Proficient in designing and developing RESTful APIs and backend systems using various frameworks and technologies.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {backendSkills.map((skill, index) => (
                                <Chip key={index} className='chip' label={skill} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faAws} size="3x" />
                        <h3>DevOps & Cloud</h3>
                        <p>Experience in CI/CD pipelines, cloud deployments, and managing containerized applications with Kubernetes.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {devOpsSkills.map((skill, index) => (
                                <Chip key={index} className='chip' label={skill} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Tools & Techniques</h3>
                        <p>Familiar with various tools for software development, debugging, and performance monitoring.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools:</span>
                            {tools.map((tool, index) => (
                                <Chip key={index} className='chip' label={tool} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
