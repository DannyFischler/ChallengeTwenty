import React from 'react';
// import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header>
      <h1>Danny</h1>
      <nav>
        <ul>
          {['about', 'portfolio', 'contact', 'resume'].map((section) => (
            <li
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
