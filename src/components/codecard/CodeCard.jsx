import React from 'react'
import "./codecard.scss"

import { VscMultipleWindows } from 'react-icons/vsc';
import { VscGithub } from 'react-icons/vsc';

const CodeCard = (props) => {
  return (
    <div className='code__grid-item--container'>
        {props.icon}
          {/* <{CODE_DATA[0].icon} size={128} /> */}
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          
          <div className='code__grid-item-link'><VscMultipleWindows size={34} color="#3777bc"/> <a href="#">Посмотреть вживую</a></div><br />
          
          <div className='code__grid-item-link'><VscGithub size={34} color="#3777bc"/> <a href={props.github}>Код на Гитхабе</a></div> 
          
          
    </div>
  )
}

export default CodeCard