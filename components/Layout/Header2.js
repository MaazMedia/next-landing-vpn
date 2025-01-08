import React from "react";

const Header2 = () => {
  return (
    <header className="header-fa">
      <a href="/" className="logo">
        <img className="h-[70px]" src="/assets/Logo.png" />
      </a>
      <div id="menu" className="fas fa-bars" />
      <nav className="navbar">
        <ul>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#education">Education</a>
          </li>
          <li>
            <a href="/#work">Work</a>
          </li>
          <li>
            <a className="active" href="/#experience">
              Experience
            </a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header2;
