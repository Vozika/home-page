import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return <div>

<ul>
    <li><a href="#about" className="navbar__link">About Me</a></li>
    <li><a href="#design" className="navbar__link">Design</a></li>
    <li><a href="#" className="navbar__link">Coding</a></li>
    <li><a href="#contact" className="navbar__link">Contact Me</a></li>
</ul>

  </div>;
};

export default Navbar;
