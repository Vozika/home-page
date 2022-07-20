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
          Я полагаю, что уже можно не представляться. Мои имя и фамилия написаны
          наверху страницы, трудно пропустить. Если, конечно, ты не слепой. Или
          долбоёб. Или слепой долбоёб. Какая удача в жизни.{" "}
        </p>
        <p>
          Чем я занимаюсь, думаю, тоже понятно. Там крутятся буквы, всё, как вы
          любите. Они сообщают вам в доступной и интерактивной форме о моих
          знаниях и умениях, приобретённых кровью и потом. А также
          нечеловеческими усилиями.
        </p></div>
        <img src={Budka} alt="Budka" className="budka"/>
      </div>
      
      <div className="about__grid-item"></div>
    </div>
  );
};

export default About;
