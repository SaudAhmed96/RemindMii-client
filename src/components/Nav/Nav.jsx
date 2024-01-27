import React, { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navigate = useNavigate();

  const showNavigation = () => {
    setNavToggle(!navToggle)
    // console.log(navList.current)
  }

  return (
    <div className='navbar'>
      <div className='navbar__logo-container'>
        <h2 className='navbar__logo' onClick={() => { navigate('./reminders') }}>RemindMii</h2>
      </div>

      <div className='navbar__nav-wrap'>
        <p className='navbar__toggle' onClick={showNavigation}>{navToggle ? "x" : "O"}</p>

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
