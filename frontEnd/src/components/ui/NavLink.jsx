import React from 'react'
import { Link } from 'react-router-dom'
const NavLink = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a classNamme="nav-link active fw-semibold" href="#!">Home</a>
        </li>
        <li className="nav-item">
            <Link to="/profile" className="nav-link fw-semibold" href="!#">Shop</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/about">About</Link>
        </li>
        <li className="nav-item">
            <a className="nav-link fw-semibold" href="#!">Contact</a>
        </li>
    </ul>
  )
}

export default NavLink