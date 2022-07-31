import React from "react";
import "./design.scss";
import LeftTopCorner from "./images/left-top-corner.svg";

const Design = () => {
  const [imageDir, setImageDir] = React.useState("logo");

  const squares01 = [];
  const squares02 = [];

  for (let i = 1; i < 9; i++) {
    if (i < 5) {
      squares01.push(
        <div className="design__grid-item--container">
          <img
            src={"./images/" + imageDir + "/000" + i + ".jpg"}
            alt="Image"
            className="design__image"
          />
        </div>
      );
    } else {
      squares02.push(
        <div className="design__grid-item--container">
          <img
            src={"./images/" + imageDir + "/000" + i + ".jpg"}
            alt="Image"
            className="design__image"
          />
        </div>
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
      <div className="design__grid-item--top">
        <ul>
          <li onClick={() => setImageDir("logo")} className={imageDir === "logo" ? "design__grid-navbar--active" : "design__grid-navbar"}>Лого</li>
          {/* <li onClick={() => setImageDir("id")} className={imageDir === "id" ? "design__grid-navbar--active" : "design__grid-navbar"}>Фирстиль</li> */}
          <li onClick={() => setImageDir("poly")} className={imageDir === "poly" ? "design__grid-navbar--active" : "design__grid-navbar"}>Полиграфия</li>
          <li onClick={() => setImageDir("pack")} className={imageDir === "pack" ? "design__grid-navbar--active" : "design__grid-navbar"}>Упаковка</li>
          <li onClick={() => setImageDir("photo")} className={imageDir === "photo" ? "design__grid-navbar--active" : "design__grid-navbar"}>Фотография</li>
        </ul>
      </div>

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
