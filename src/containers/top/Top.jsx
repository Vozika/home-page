import React from 'react'
import "./top.scss"

const Top = () => {
  return (
    <div className='top__grid'>
        <div className='top__grid-item'></div>
        <div className='top__grid-item--center'>
        

        {/* <div className="scroller">
        <span>
          Дизайнер<br />
          Иллюстратор<br />
          Разработчик<br />
          Фотограф<br />
        </span>
      </div> */}

      <h1>В дизайнере всё должно быть прекрасно:<br />и <a href="#about">лицо</a>, и <a href="">одежда</a>, и <a href="#design">портфолио</a>, и <a href="#contact">зарплата</a>.<br />И ещё, чтоб <a href="">сайты</a> сам делать мог.</h1>
        
        </div>
        
        <div className='top__grid-item'></div>
    </div>
  )
}

export default Top