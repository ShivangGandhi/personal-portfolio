import React from "react";
import "../assets/styles/Project.scss";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import project01 from "../assets/images/project_01.png";


const projectsData = [
    {
        title: "UpBeing",
        image: project01,
        link: "https://upbeing.ai/",
        description:
            "Led the frontend refactor of the UpBeing app, improving state management. Developed a custom onboarding flow, integrated Twilio and Intercom for digital identity, and enhanced analytics with Firebase. Contributed to backend development, implementing APIs for user check-ins, mood tracking, and onboarding.",
    },
    {
        title: "High Speed Chase",
        image: mock09,
        link: "https://yujisatojr.itch.io/highspeedchase",
        description:
            "Designed, developed, and launched a 3D multiplayer racing game with C# and Unity, available on Itch.io.",
    },
];

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="project" key={index}>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <img src={project.image} className="zoom" alt={project.title} width="100%" />
                            <h2>{project.title}</h2>
                        </a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
