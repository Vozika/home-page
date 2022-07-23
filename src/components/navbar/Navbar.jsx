import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return <div>

<ul>
    <li><a href="#about" className="navbar__link">Обо мне</a></li>
    <li><a href="#design" className="navbar__link">Дизайн</a></li>
    <li><a href="#code" className="navbar__link">Код</a></li>
    <li><a href="#contact" className="navbar__link">Напишите</a></li>
</ul>

  </div>;
};

export default Navbar;
