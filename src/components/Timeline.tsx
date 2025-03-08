import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">UpBeing Inc., Halifax, NS, Canada</h4>
            <p>
              React Native, TypeScript, Laravel (PHP), PostgreSQL, Firebase, GCP, CI/CD, Kubernetes, Redux
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2023 - Dec 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">UpBeing Inc., Halifax, NS, Canada</h4>
            <p>
              React Native, Next.js, TypeScript, Sentry.io, Firebase, PostgreSQL, GCP, CI/CD, Asana
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2021 - Dec 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">iFreightbox Technologies</h4>
            <p>
              Flutter, Dart, Riverpod, Java Spring, SQL Server, GitLab, Redux, AWS
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2020 - Aug 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Technocolabs</h4>
            <p>
              React, JavaScript, Node.js, Jenkins, Kibana, GCP (Cloud Functions, API Gateway, Pub/Sub), AWS (ECS, EKS)
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
