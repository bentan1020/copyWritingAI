import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Header.css"

const Header = () => {
  return (
    <ul className="header">
        <li><NavLink to="/">General</NavLink></li>
        <li><NavLink to="/pain">Pain</NavLink></li>
        <li><NavLink to="/hopes">Hopes</NavLink></li>
        <li><NavLink to="/competitors">Competitors</NavLink></li>
        <li><NavLink to="/product">Product</NavLink></li>
    </ul>
  )
}

export default Header
