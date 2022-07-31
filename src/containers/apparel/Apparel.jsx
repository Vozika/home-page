import React from "react";
import "./apparel.scss";
import LeftTopCorner from "./images/left-top-corner.svg";

import "animate.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Apparel = () => {
  const [imageDir, setImageDir] = React.useState("apparel");

  const squares01 = [];
  const squares02 = [];

  for (let i = 1; i < 9; i++) {
    if (i < 5) {
      squares01.push(
        <div className="apparel__grid-item--container">
          <img
            src={"./images/" + imageDir + "/000" + i + ".jpg"}
            alt="Image"
            className="apparel__image"
          />
        </div>
      );
    } else {
      squares02.push(
        <div className="apparel__grid-item--container">
          <img
            src={"./images/" + imageDir + "/000" + i + ".jpg"}
            alt="Image"
            className="apparel__image"
          />
        </div>
      );
    }
  }

  return (
    <div className="apparel__grid" id="apparel">
      <div className="apparel__grid-item--left-top-corner">
        <img
          src={LeftTopCorner}
          className="apparel__image--left-top-corner"
          alt=""
        />
      </div>
      <div className="apparel__grid-item--top">
        {/* <ul>
          <li onClick={() => setImageDir("logo")} className={imageDir === "logo" ? "apparel__grid-navbar--active" : "apparel__grid-navbar"}>Лого</li>
          <li onClick={() => setImageDir("id")} className={imageDir === "id" ? "apparel__grid-navbar--active" : "apparel__grid-navbar"}>Фирстиль</li>
          <li onClick={() => setImageDir("poly")} className={imageDir === "poly" ? "apparel__grid-navbar--active" : "apparel__grid-navbar"}>Полиграфия</li>
          <li onClick={() => setImageDir("pack")} className={imageDir === "pack" ? "apparel__grid-navbar--active" : "apparel__grid-navbar"}>Упаковка</li>
          <li onClick={() => setImageDir("photo")} className={imageDir === "photo" ? "apparel__grid-navbar--active" : "apparel__grid-navbar"}>Фотография</li>
        </ul> */}

<p>Футболки с моими авторскими принтами. Скоро в продаже. Или нескоро.</p>

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
      <div className="apparel__grid-item"></div>
      <div className="apparel__grid-item"></div>
      <div className="apparel__grid-item"></div>
      <div className="apparel__grid-item"></div>
      <div className="apparel__grid-item">
        <img
          src={LeftTopCorner}
          className="apparel__image--right-bottom-corner"
          alt=""
        />
      </div>
    </div>
  );
};

export default Apparel;
