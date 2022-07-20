import React from "react";
import "./about.scss";
import Budka from "./images/budka.jpg"

const About = () => {
  return (
    <div className="about__grid" id="about">
      <div className="about__grid-item"></div>

      <div className="about__grid-item--center">
        <div>
        <h1>Здравствуйте, дамы и господа.</h1>
        <h2>А также леди и джентельмены.</h2>
        <p>
          Полагаю, что уже можно не представляться. Мои имя и фамилия написаны
          наверху страницы, так что их вы уже знаете. Позвольте к этой важной информации добавить ещё пару интересных фактов о себе.{" "}
        </p>
        <p>
        Я — графический дизайнер и веб-разработчик. Сначала первое, потом второе. Общий опыт работы в обеих областях у меня больше 20-и лет, хотя первое заняло значительно больше времени.
        </p></div>
        <img src={Budka} alt="Budka" className="budka"/>
      </div>
      
      <div className="about__grid-item"></div>
    </div>
  );
};

export default About;
