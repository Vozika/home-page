import React from 'react'
import "./design.scss"
import SusekiImage from "./images/suseki.svg"
import LeftTopCorner from "./images/left-top-corner.svg"
import RightTopCorner from "./images/right-top-corner.svg"
import KitchenImage from "./images/kitchen.jpg"

const Design = () => {
  return (
    <div className='design__grid' id="design">

<div className='design__grid-item--left-top-corner'><img src={LeftTopCorner} className="design__image--left-top-corner" alt=""/></div>
<div className='design__grid-item'></div>
<div className='design__grid-item'></div>
<div className='design__grid-item'></div>
<div className='design__grid-item'></div>
<div className='design__grid-item--right-top-corner'><img src={RightTopCorner} className="design__image--right-top-corner" alt=""/></div>

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
    </div>
  )
}

export default Design