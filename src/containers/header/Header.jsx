import React from 'react'
import Logo from '../../components/logo/Logo'
import Navbar from '../../components/navbar/Navbar'
import "./header.scss"

const Header = () => {
  return (
    <div className="grid">
      <div className='grid-item'></div>
      <div className='grid-item'></div>
      <div className='grid-item'></div>

      <div className='grid-item'></div>
      <div className='grid-item__main'>
        <Logo />
        <Navbar />
      </div>
      <div className='grid-item'></div>
        
    </div>



  )
}

export default Header