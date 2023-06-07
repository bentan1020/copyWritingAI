import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <ul className="header">
        <li><NavLink to="/general" activeClassName="active">General</NavLink></li>
        <li><NavLink to="/pain" activeClassName="active">Pain</NavLink></li>
        <li><NavLink to="/hopes" activeClassName="active">Hopes</NavLink></li>
        <li><NavLink to="/competitors" activeClassName="active">Competitors</NavLink></li>
    </ul>
  )
}

export default Header
