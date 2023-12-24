import React from 'react';
// import './Portfolio.css'; // Make sure to create a corresponding CSS file

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      {/* Example of a single portfolio item */}
      <div className="portfolio-item">
        <img src="path_to_project_image.jpg" alt="Project Name" />
        <div className="project-details">
          <h3>Project Name</h3>
          <p>Project description...</p>
          <a href="link_to_live_project">Live Project</a>
          <a href="link_to_github_repo">GitHub Repo</a>
        </div>
      </div>
      {/* Repeat the above block for each project */}
    </section>
  );
};

export default Portfolio;
