import React from 'react'
import "./codecard.scss"

import { VscMultipleWindows } from 'react-icons/vsc';
import { VscGithub } from 'react-icons/vsc';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const CodeCard = (props) => {

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
          transition={{ ease: "easeOut", duration: 1 }}
          initial="hidden"
    
    className='code__grid-item--container'>
        {props.icon}
          {/* <{CODE_DATA[0].icon} size={128} /> */}
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          
          <div className='code__grid-item-link'><VscMultipleWindows size={34} color="#3777bc"/> <a href={props.link} target="_blank">Посмотреть вживую</a></div><br />
          
          <div className='code__grid-item-link'><VscGithub size={34} color="#3777bc"/> <a href={props.github} target="_blank">Код на Гитхабе</a></div> 
          
          
    </motion.div>
  )
}

export default CodeCard