import React, { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import './Nav.scss'
import navIcon from '../../assets/images/menu-burger.svg'

const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navigate = useNavigate();

  const showNavigation = () => {
    setNavToggle(!navToggle)
    // console.log(navList.current)
  }

  return (
    <div className='navbar'>
      <div className='navbar__top'>
        <div className='navbar__logo-container'>
          <h2 className='navbar__logo' onClick={() => { navigate('./reminders') }}>RemindMii</h2>
        </div>
        <div className='navbar__toggle' onClick={showNavigation}>
          {navToggle ?
            <p className='navbar__toggle-close'>x</p> :
            <img src={navIcon} className='navbar__toggle-icon' />
          }
        </div>
      </div>

      <div className='navbar__bottom'>
        <ul className={navToggle ? `navbar__navlist` : "navbar__navlist navbar__navlist--hidden"}>
          <li className='navbar__navlist-item'>
            <NavLink to={'/reminders'} className='navbar__navlink'>Reminders</NavLink>
          </li>
          <li className='navbar__navlist-item'>
            <NavLink to={'/calendar'} className='navbar__navlink'>Calendar</NavLink>
          </li>
          <li className='navbar__navlist-item'>
            <NavLink to={'/goals'} className='navbar__navlink'>Goals</NavLink>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default Nav
