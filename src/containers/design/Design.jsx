import React from "react";
import "./design.scss";
import LeftTopCorner from "./images/left-top-corner.svg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Design = () => {
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
  
  const [imageDir, setImageDir] = React.useState("logo");

  const squares01 = [];
  const squares02 = [];

  for (let i = 1; i < 9; i++) {
    if (i < 5) {
      squares01.push(
        <motion.div
        ref={ref}
          animate={control}
          variants={boxVariant}
          transition={{ ease: "easeOut", duration: 1 }}
          initial="hidden"
        className="design__grid-item--container">
          <img
            src={"./images/" + imageDir + "/000" + i + ".jpg"}
            alt="Image"
            className="design__image"
          />
        </motion.div>
      );
    } else {
      squares02.push(
        <motion.div
        ref={ref}
          animate={control}
          variants={boxVariant}
          transition={{ ease: "easeOut", duration: 1 }}
          initial="hidden"
        className="design__grid-item--container">
          <img
            src={"./images/" + imageDir + "/000" + i + ".jpg"}
            alt="Image"
            className="design__image"
          />
        </motion.div>
      );
    }
  }

  return (
    <div className="design__grid" id="design">
      <div className="design__grid-item--left-top-corner">
        <img
          src={LeftTopCorner}
          className="design__image--left-top-corner"
          alt=""
        />
      </div>
      <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className="design__grid-item--top">
        <ul>
          <li onClick={() => setImageDir("logo")} className={imageDir === "logo" ? "design__grid-navbar--active" : "design__grid-navbar"}>Лого</li>
          {/* <li onClick={() => setImageDir("id")} className={imageDir === "id" ? "design__grid-navbar--active" : "design__grid-navbar"}>Фирстиль</li> */}
          <li onClick={() => setImageDir("poly")} className={imageDir === "poly" ? "design__grid-navbar--active" : "design__grid-navbar"}>Полиграфия</li>
          <li onClick={() => setImageDir("pack")} className={imageDir === "pack" ? "design__grid-navbar--active" : "design__grid-navbar"}>Упаковка</li>
          <li onClick={() => setImageDir("photo")} className={imageDir === "photo" ? "design__grid-navbar--active" : "design__grid-navbar"}>Фотография</li>
        </ul>
      </motion.div>

      <div className="design__grid-item--right-top-corner">
        <img
          src={LeftTopCorner}
          className="design__image--right-top-corner"
          alt=""
        />
      </div>

      <div className="design__grid-item"></div>
        {squares01}
      <div className="design__grid-item"></div>

      <div className="design__grid-item"></div>
        {squares02}
      <div className="design__grid-item"></div>

      <div className="design__grid-item--left-bottom-corner">
        <img
          src={LeftTopCorner}
          className="design__image--left-bottom-corner"
          alt=""
        />
      </div>
      <div className="design__grid-item"></div>
      <div className="design__grid-item"></div>
      <div className="design__grid-item"></div>
      <div className="design__grid-item"></div>
      <div className="design__grid-item">
        <img
          src={LeftTopCorner}
          className="design__image--right-bottom-corner"
          alt=""
        />
      </div>
    </div>
  );
};

export default Design;
