import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className="nav">
        <div className="container">
            <ul className="nav-menu">
                <li className="nav-menu-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-menu-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Nav