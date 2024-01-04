import React from 'react';
import './Resume.css'; 

const Resume = () => {
  return (
    <section id="resume">
      <h2>My Resume</h2>
      <p>Click the link below to download my resume:</p>
      <a href={`${process.env.PUBLIC_URL}/DannyResume.pdf`} download="DannyResume.pdf">
        Download My Resume
      </a>
      {/* Other content */}
    </section>
  );
};


export default Resume;
