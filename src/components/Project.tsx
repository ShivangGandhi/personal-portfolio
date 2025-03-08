import React from "react";
import "../assets/styles/Project.scss";
import project01 from "../assets/images/project_01.png";
import project02 from "../assets/images/project_02.gif";
import project03 from "../assets/images/project_03.png";
import project04 from "../assets/images/project_04.png";
import project05 from "../assets/images/project_05.png";
import project06 from "../assets/images/project_06.png";
import project07 from "../assets/images/project_07.png";
import project08 from "../assets/images/project_08.png";



const projectsData = [
    {
        title: "UpBeing",
        image: project01,
        link: "https://upbeing.ai/",
        description:
            "Led the frontend refactor of the UpBeing app, improving state management. Developed a custom onboarding flow, integrated Twilio and Intercom for digital identity, and enhanced analytics with Firebase. Contributed to backend development, implementing APIs for user check-ins, mood tracking, and onboarding.",
    },
    {
        title: "Trivia Titans",
        image: project02,
        link: "https://github.com/ShivangGandhi/TriviaGameServerlessApp",
        description:
            "Developed a serverless trivia game using AWS and GCP cloud services. Utilized React for the frontend, and designed modular microservices in Node.js, with AWS Lambda, API Gateway, and GCP Cloud Functions. Integrated DynamoDB, Firestore, and used BigQuery for OLAP. Ensured scalability and low-latency access with AWS CDN.",
    },
    {
        title: "iFreightBox App",
        image: project03,
        link: "https://www.ifreightbox.com/",
        description:
            "Collaborated on the development of Driver and Trader apps using Flutter. Focused on improving the user experience for cargo management, inventory tracking, and route mapping with Google Maps API. Deployed the backend using Django on AWS, ensuring scalability and high availability.",
    },
    {
        title: "goDutch: Ride Sharing App",
        image: project04,
        link: "https://github.com/ShivangGandhi/goDutchSpringBootProject",
        description:
            "Built a ride-sharing app using React and Spring Boot. Integrated Google Places API for location-based recommendations and used JWT for secure authentication. Employed Test-Driven Development (TDD) with JUnit and Swagger/OpenAPI for documenting APIs.",
    },
    {
        title: "PetShield",
        image: project05,
        link: "https://github.com/ShivangGandhi/PetShieldMERNStackApplication",
        description:
            "Built a user-friendly frontend with React/NextJS, implementing Redux for state management. The app allows pet owners to find nearby vets using Google API location services, book appointments, and manage their pets' details.",
    },
    {
        title: "CloudKitchen AWS Web App",
        image: project06,
        link: "https://github.com/ShivangGandhi/CloudKitchenAWSWebApplication",
        description:
            "Developed a full-stack web application using ReactJS, Node.js, ExpressJS, and AWS Services. Deployed the app using EC2 instances for both the frontend and backend. Utilized AWS S3 for image storage, DynamoDB for data storage, and CloudFront for content delivery. Integrated AWS SNS and Lambda functions for email services.",
    },
    {
        title: "Feliciano: Laravel Web Application",
        image: project07,  // Replace with an appropriate image
        link: "https://github.com/ShivangGandhi/FelicianoLaravelWebApplication",
        description:
            "Developed a Laravel-based web application for a restaurant, implementing features using the Laravel MVC framework, MySQL for data storage, and Apache Tomcat Server for deployment. Built REST APIs for various functionalities and integrated third-party services like Mailchimp for subscription management, Stripe for payment processing, and Livewire for 2FA. Used Bitbucket for version control and repository management.",
    },
    {
        title: "Skin Disease Classification",
        image: project08,
        link: "https://github.com/ShivangGandhi/SkinDiseaseClassificationEnsembleTechniques",
        description:
            "Addressed skin cancer classification using convolutional neural networks (CNNs). Implemented a deep learning solution with U-Net for image segmentation and transfer learning using InceptionV3. Extracted 52 features from the model and combined them with other CSV file features. Applied XGBoost Classifier for prediction. The model outperforms prior state-of-the-art methods, offering intelligent solutions for early detection and diagnosis of skin diseases.",
    }

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
