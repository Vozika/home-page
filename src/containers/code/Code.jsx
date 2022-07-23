import React from 'react'
import "./code.scss"
import LeftTopCorner from "./images/left-top-corner.svg"
import CodeCard from "../../components/codecard/CodeCard";

import { GiModernCity } from 'react-icons/gi';
import { GiWisdom } from 'react-icons/gi';
import { GiTakeMyMoney } from 'react-icons/gi';
import { RiPsychotherapyFill } from 'react-icons/ri';
import { MdBathroom } from 'react-icons/md';
import { MdOutlineBathtub } from 'react-icons/md';

const CODE_DATA = [
  {
    id: 0,
    icon: <GiModernCity size={128} />,
    title: "Capital Quiz App",
    text: "Небольшое приложение, позволяющее играть в «столицы». Сделано с применением Material UI.",
    link: "#",
    github: "https://github.com/vozika/quiz-app",
  },
  {
    id: 1,
    icon: <GiWisdom size={128} />,
    title: "Wisdom Generator",
    text: "Умные англоязычные мысли и рэндомные картинки из Интернета по API. Дзен-созерцание на любителя.",
    link: "#",
    github: "https://github.com/vozika/quiz-app",
  },
  {
    id: 2,
    icon: <GiTakeMyMoney size={128} />,
    title: "Next Invest",
    text: "Landing page, нарезанная из фигмовского макета. Адаптивная кросс-браузерная вёрстка.",
    link: "#",
    github: "https://github.com/vozika/quiz-app",
  },
  {
    id: 3,
    icon: <RiPsychotherapyFill size={128} />,
    title: "Meme Generator",
    text: "Традиционный проект в портфолио каждого начинающего разработчика. Классика жанра.",
    link: "#",
    github: "https://github.com/vozika/quiz-app",
  },
  {
    id: 4,
    icon: <MdBathroom size={128} />,
    title: "Сантонит",
    text: "Сделанный в 2005-м году сайт на чистых HTML и CSS. Древняя историческая реликвия.",
    link: "#",
    github: "https://github.com/vozika/quiz-app",
  },
  {
    id: 5,
    icon: <MdOutlineBathtub size={128} />,
    title: "Duschy",
    text: "А это вообще 2003-й год. И снова HTML и CSS. Ещё более древняя историческая реликвия.",
    link: "#",
    github: "https://github.com/vozika/quiz-app",
  },
  {
    id: 6,
    icon: <GiModernCity size={128} />,
    title: "",
    text: "",
    link: "#",
    github: "#",
  },
  {
    id: 7,
    icon: <GiModernCity size={128} />,
    title: "",
    text: "",
    link: "#",
    github: "#",
  },
]

const Code = () => {
  return (
    <div className='code__grid' id="code">

<div className='code__grid-item--left-top-corner'><img src={LeftTopCorner} className="code__image--left-top-corner" alt=""/></div>
<div className='code__grid-item--top'>




</div>
{/* <div className='code__grid-item'></div>
<div className='code__grid-item'></div>
<div className='code__grid-item'></div> */}
<div className='code__grid-item--right-top-corner'><img src={LeftTopCorner} className="code__image--right-top-corner" alt=""/></div>

        <div className='code__grid-item'></div>

        {
          CODE_DATA.slice(0, 4).map((data) => {
            return (
              <CodeCard key={data.id} icon={data.icon} title={data.title} text={data.text} github={data.github} />
            )
          })
        }

        {/* <CodeCard icon={CODE_DATA[0].icon} title={CODE_DATA[0].title} text={CODE_DATA[0].text} github={CODE_DATA[0].github} /> */}

        {/* <div className='code__grid-item--container'></div>
        <div className='code__grid-item--container'></div>
        <div className='code__grid-item--container'></div> */}
        <div className='code__grid-item'></div>

        <div className='code__grid-item'></div>
        {
          CODE_DATA.slice(-4).map((data) => {
            return (
              <CodeCard key={data.id} icon={data.icon} title={data.title} text={data.text} github={data.github} />
            )
          })
        }
        <div className='code__grid-item'></div>

        <div className='code__grid-item--left-bottom-corner'><img src={LeftTopCorner} className="code__image--left-bottom-corner" alt=""/></div>
        <div className='code__grid-item'></div>
        <div className='code__grid-item'></div>
        <div className='code__grid-item'></div>
        <div className='code__grid-item'></div>
        <div className='code__grid-item'><img src={LeftTopCorner} className="code__image--right-bottom-corner" alt=""/></div>

    </div>
  )
}

export default Code