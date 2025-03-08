import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.jpeg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ShivangGandhi/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/shivangkumargandhi/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Shivangkumar Gandhi</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ShivangGandhi/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/shivangkumargandhi/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;