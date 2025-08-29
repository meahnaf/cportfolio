import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./About.css";
const profilePic = 'C:\Users\AHNAF\OneDrive\Desktop\Portfolio\dan10ish.github.io\ChatGPT Image Aug 29, 2025, 06_21_15 PM.png'

const About = () => {
  return (
    <div className="about-app">
      <div className="profile-section">
        
        <h1 className="profile-name">Mohammad Ahnaf Ali</h1>
      </div>

      <div className="social-links">
        

        <div className="social-item">
          <span className="social-label">github</span>
          <a href="https://github.com/meahnaf" target="_blank" rel="noopener noreferrer" className="social-link">
            meahnaf
            <ArrowUpRight className="social-icon" size={12} />
          </a>
        </div>

        

        <div className="social-item">
          <span className="social-label">email</span>
          <a href="mailto:ahnafali1345@gmail.com" className="social-link">
            ahnafali1345@gmail.com
            <ArrowUpRight className="social-icon" size={12} />
          </a>
        </div>
      </div>

      <div className="about-section">
        <div className="about-item">
          <span className="about-label">about</span>
          <span className="about-text">I’m a B.Tech student in Electronics and Communication Engineering and Minors in AI/ML with a strong passion for software development.

I’ve developed a deep interest in Software development and enjoy building efficient, real-world solutions through code. I’m always eager to learn, solve problems, and grow as a developer.</span>
        </div>

        <div className="about-item">
          <span className="about-label">interests</span>
          <span className="about-text">AI/ML | Web Dev | App Dev</span>
        </div>
      </div>


    </div>
  );
};
export default About;
