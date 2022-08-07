import React from "react";
import "./apparel.scss";
import LeftTopCorner from "./images/left-top-corner.svg";

import "animate.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Apparel = () => {
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

  const [imageDir, setImageDir] = React.useState("apparel");

  const squares01 = [];
  const squares02 = [];

  for (let i = 1; i < 9; i++) {
    if (i < 5) {
      squares01.push(
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="apparel__grid-item--container"
        >
          <img
            src={"./images/" + imageDir + "/000" + i + ".jpg"}
            alt="Image"
            className="apparel__image"
          />
        </motion.div>
      );
    } else {
      squares02.push(
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="apparel__grid-item--container"
        >
          <img
            src={"./images/" + imageDir + "/000" + i + ".jpg"}
            alt="Image"
            className="apparel__image"
          />
        </motion.div>
      );
    }
  }

  return (
    <div id="apparel">
      <div className="apparel__grid">
        <div className="apparel__grid-item--left-top-corner">
          <img
            src={LeftTopCorner}
            className="apparel__image--left-top-corner"
            alt=""
          />
        </div>
        <div className="apparel__grid-item--top">
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            Футболки с моими авторскими принтами. Скоро в продаже. Или нескоро.
          </motion.p>
        </div>

        <div className="apparel__grid-item--right-top-corner">
          <img
            src={LeftTopCorner}
            className="apparel__image--right-top-corner"
            alt=""
          />
        </div>

        <div className="apparel__grid-item"></div>
        {squares01}
        <div className="apparel__grid-item"></div>

        <div className="apparel__grid-item"></div>
        {squares02}
        <div className="apparel__grid-item"></div>

        <div className="apparel__grid-item--left-bottom-corner">
          <img
            src={LeftTopCorner}
            className="apparel__image--left-bottom-corner"
            alt=""
          />
        </div>
        <div className="apparel__grid-item--bottom"></div>
        <div className="apparel__grid-item--bottom"></div>
        <div className="apparel__grid-item--bottom"></div>
        <div className="apparel__grid-item--bottom"></div>
        <div className="apparel__grid-item">
          <img
            src={LeftTopCorner}
            className="apparel__image--right-bottom-corner"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Apparel;
