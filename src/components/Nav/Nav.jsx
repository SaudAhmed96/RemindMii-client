import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><NavLink to={'/reminders'}>Reminders</NavLink></li>
            <li><NavLink to={'/calendar'}>Calendar</NavLink></li>
            <li><NavLink to={'/goals'}>Goals</NavLink></li>
            {/* need to replace with circle logo the below */}
            <li><p className='circleLogo'>O</p></li>
        </ul>
    </div>
  )
}

export default Nav
