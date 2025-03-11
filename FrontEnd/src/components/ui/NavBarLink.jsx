import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const NavBarLink = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
        <li className="nav-item">
            <NavLink 
                to="/login"
                className={({ isActive }) =>
                
                isActive ? "nav-link active  fw-semibold" : "nav-link fw-semibold"
            }
            end
            >
                Login
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink 
                to="/register"
                className={({ isActive }) =>
                isActive ? "nav-link active  fw-semibold" : "nav-link fw-semibold"
            }
            end
            >
                Register
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink 
            to="/profile"
            className={({ isActive }) => 
                isActive ? "nav-link active fw-semibold" : "nav-link fw-semibold"
        } end

        >
            Hi, Melvin
        </NavLink>
        </li>

        <li className="nav-item">
            <NavLink
            to="/logout"
            className={({ isActive }) =>
            isActive ? "nav-link active fw-semibold" : "nav-link fw-semibold"
        }
        end >
            LogOut
           
            </NavLink>

        </li>
    </ul>
  )
}

export default NavBarLink