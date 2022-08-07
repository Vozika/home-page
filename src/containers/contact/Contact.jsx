import React from "react";
import "./contact.scss";
import "animate.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { GrLinkTop } from "react-icons/gr";

const Contact = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      animate={control}
      variants={boxVariant}
      initial="hidden"
      transition={{ ease: "easeOut", duration: 1 }}
      className="contact__grid"
      id="contact"
    >
      <div className="contact__grid-item"></div>
      <div className="contact__grid-item--center">
        <p>Если вы хотите предложить мне работу, напишите письмо.</p>

        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 2.5 }}
        >
          metasoma@yandex.ru
        </motion.h1>
        <br />
        <br />
        <a href="#">
          <GrLinkTop size={64} />
        </a>
      </div>
      <div className="contact__grid-item"></div>
    </motion.div>
  );
};

export default Contact;
