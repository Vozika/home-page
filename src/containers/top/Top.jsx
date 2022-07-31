import React from "react";
import "./top.scss";
import "animate.css";

const Top = () => {
  return (
    <div className="animate__animated animate__bounceInDown animate__slow top__grid">
      <div className="top__grid-item"></div>
      <div className="top__grid-item--center">
        <h1>
          В дизайнере всё должно быть прекрасно:
          <br />и <a href="#about">лицо</a>, и <a href="#apparel">одежда</a>, и{" "}
          <a href="#design">портфолио</a>, и <a href="#contact">зарплата</a>.
          <br />И ещё, чтоб <a href="#code">сайты</a> сам делать мог.
        </h1>
      </div>

      <div className="top__grid-item"></div>
    </div>
  );
};

export default Top;
