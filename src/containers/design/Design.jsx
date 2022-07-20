import React from 'react'
import "./design.scss"
import SusekiImage from "./images/suseki.svg"
import LeftTopCorner from "./images/left-top-corner.svg"
import KitchenImage from "./images/kitchen.jpg"

const Design = () => {
  return (
    <div className='design__grid' id="design">

<div className='design__grid-item--left-top-corner'><img src={LeftTopCorner} className="design__image--left-top-corner" alt=""/></div>
<div className='design__grid-item--top'>

<ul>
  <li><a href="">Лого</a></li>
  <li><a href="">Фирстиль</a></li>
  <li><a href="">Полиграфия</a></li>
</ul>


</div>
{/* <div className='design__grid-item'></div>
<div className='design__grid-item'></div>
<div className='design__grid-item'></div> */}
<div className='design__grid-item--right-top-corner'><img src={LeftTopCorner} className="design__image--right-top-corner" alt=""/></div>

        <div className='design__grid-item'></div>
        <div className='design__grid-item--container'><img src={SusekiImage} alt="Suseki Logo" className="design__image"/></div>
        <div className='design__grid-item--container'><img src={KitchenImage} alt="Suseki Logo" className="design__image"/></div>
        <div className='design__grid-item--container'></div>
        <div className='design__grid-item--container'></div>
        <div className='design__grid-item'></div>

        <div className='design__grid-item'></div>
        <div className='design__grid-item--container'></div>
        <div className='design__grid-item--container'></div>
        <div className='design__grid-item--container'></div>
        <div className='design__grid-item--container'></div>
        <div className='design__grid-item'></div>

        <div className='design__grid-item--left-bottom-corner'><img src={LeftTopCorner} className="design__image--left-bottom-corner" alt=""/></div>
        <div className='design__grid-item'></div>
        <div className='design__grid-item'></div>
        <div className='design__grid-item'></div>
        <div className='design__grid-item'></div>
        <div className='design__grid-item'><img src={LeftTopCorner} className="design__image--right-bottom-corner" alt=""/></div>

    </div>
  )
}

export default Design