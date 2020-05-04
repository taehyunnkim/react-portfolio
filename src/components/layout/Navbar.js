import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <NavLink to='/react-portfolio'><h1>Eric Kim</h1></NavLink>
    </nav>
  )
}
