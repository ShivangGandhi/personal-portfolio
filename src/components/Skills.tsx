import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faNodeJs,
    faAws,
    faAndroid,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faTools, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const mobileFrameworks = [
    "React Native", "Flutter", "Android SDK", "SwiftUI", "UIKit"
];

const webFrameworks = [
    "React", "Angular", "Vue.js",
];

const backendFrameworks = [
    "Node.js", "Express.js", "Laravel", "Spring Boot", "Django", "RESTApi", "GraphQL"
];

const languages = [
    "JavaScript", "TypeScript", "Dart", "Java", "Kotlin", "PHP", "Swift", "Python"
];

const databaseSkills = [
    "MySQL", "PostgreSQL", "MongoDB", "NoSQL", "Redis", "Firebase"
];

const devOpsCloudToolsSkills = [
    "GitHub", "AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "JIRA", "Sentry", "Twilio"
];

type SkillsSectionProps = {
    icon: any;
    title: string;
    description: string;
    items: string[];
    label: string;
};

function SkillsSection({ icon, title, description, items, label }: SkillsSectionProps) {
    return (
        <div className="skill">
            <FontAwesomeIcon icon={icon} size="3x" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="flex-chips">
                <span className="chip-title">{label}:</span>
                {items.map((item, index) => (
                    <Chip key={index} className='chip' label={item} />
                ))}
            </div>
        </div>
    );
}

function Skills() {
    return (
        <div className="container" id="Skills">
            <div className="Skills-container">
                <h1>Skills</h1>
                <div className="Skills-grid">
                    <SkillsSection
                        icon={faAndroid}
                        title="Mobile Development Frameworks"
                        description="Skilled in cross-platform mobile app development with native and hybrid technologies."
                        items={mobileFrameworks}
                        label="Frameworks"
                    />
                    <SkillsSection
                        icon={faVuejs}
                        title="Web Development Frameworks"
                        description="Experienced in crafting responsive and interactive web apps."
                        items={webFrameworks}
                        label="Frameworks"
                    />
                    <SkillsSection
                        icon={faNodeJs}
                        title="Backend Development Frameworks"
                        description="Proficient in backend logic, API development, and server-side architectures."
                        items={backendFrameworks}
                        label="Frameworks"
                    />
                    <SkillsSection
                        icon={faCode}
                        title="Languages"
                        description="Fluent in a wide array of programming languages across platforms."
                        items={languages}
                        label="Languages"
                    />
                    <SkillsSection
                        icon={faDatabase}
                        title="Databases"
                        description="Hands-on experience with SQL and NoSQL database management systems."
                        items={databaseSkills}
                        label="Databases"
                    />
                    <SkillsSection
                        icon={faAws}
                        title="DevOps & Cloud"
                        description="Deployment and monitoring experience using CI/CD, cloud, and containerization tools."
                        items={devOpsCloudToolsSkills}
                        label="Tools"
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;
