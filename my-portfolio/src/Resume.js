import React from 'react';
// import './Resume.css'; // Make sure to create a corresponding CSS file

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="path_to_your_resume.pdf" download>Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {/* List your skills and proficiencies here */}
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>...and so on</li>
      </ul>
    </section>
  );
};

export default Resume;
