import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      {/* Project 1 */}
      <div className="portfolio-item">
        <img src="path_to_project1_image.jpg" alt="Project 1" />
        <div className="project-details">
          <h3>Daily Planner</h3>
          <p>Project 1 description...</p>
          <a href="https://github.com/DannyFischler/ChallengeFive">GitHub Repo</a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="portfolio-item">
        <img src="path_to_project2_image.jpg" alt="Project 2" />
        <div className="project-details">
          <h3>Weather Dashboard</h3>
          <p>Project 2 description...</p>
          <a href="https://github.com/DannyFischler/ChallengeSix">GitHub Repo</a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="portfolio-item">
        <img src="path_to_project3_image.jpg" alt="Project 3" />
        <div className="project-details">
          <h3>JS Quiz</h3>
          <p>Project 3 description...</p>
          <a href="https://github.com/DannyFischler/ChallengeFour">GitHub Repo</a>
        </div>
      </div>

      {/* Project 4 */}
      <div className="portfolio-item">
        <img src="path_to_project4_image.jpg" alt="Project 4" />
        <div className="project-details">
          <h3>Readme Generator</h3>
          <p>Project 4 description...</p>
          <a href="https://github.com/DannyFischler/ChallengeNine">GitHub Repo</a>
        </div>
      </div>

      {/* Project 5 */}
      <div className="portfolio-item">
        <img src="path_to_project5_image.jpg" alt="Project 5" />
        <div className="project-details">
          <h3>Logo Generator</h3>
          <p>Project 5 description...</p>
          <a href="https://github.com/DannyFischler/ChallengeTen">GitHub Repo</a>
        </div>
      </div>

      {/* Project 6 */}
      <div className="portfolio-item">
        <img src="path_to_project6_image.jpg" alt="Project 6" />
        <div className="project-details">
          <h3>Employee Management System</h3>
          <p>Project 6 description...</p>
          <a href="https://github.com/DannyFischler/ChallengeTwelve">GitHub Repo</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
