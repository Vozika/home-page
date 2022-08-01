import React from "react";
import "./about.scss";
import Budka from "./images/budka.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about__grid" id="about">
      <div className="about__grid-item"></div>

      <div className="about__grid-item--center">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 2 }}
        >
          <h1>Здравствуйте, дамы и господа.</h1>
          <h2>А также леди и джентельмены.</h2>
          <p>
            Полагаю, что уже можно не представляться. Мои имя и фамилия написаны
            наверху страницы, так что их вы уже знаете. Позвольте к этой важной
            информации добавить ещё пару интересных фактов о себе.{" "}
          </p>
          <p>
            Я — графический дизайнер и веб-разработчик. Сначала первое, потом
            второе. Общий опыт работы в обеих областях у меня больше 20-и лет,
            хотя первое заняло значительно больше времени. Данный сайт является моим портфолио. В нём собраны мои лучшие и наиболее характерные работы, по которым можно составить представление о моём профессиональном уровне.
          </p>
          <p>Если вас что-то интересует дополнительно, напишите мне письмо. Адрес моей электронной почты <strong>metasoma@yandex.ru</strong></p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", duration: 3 }}
          src={Budka}
          alt="Budka"
          className="budka"
        />
      </div>

      <div className="about__grid-item"></div>
    </div>
  );
};

export default About;
