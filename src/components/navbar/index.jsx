import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './style.css'
const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick=()=> setClick(!click)
  return (
      <header>
          <nav className='navbar'>
              <div className='logo'>
                  Logo
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                      <Link to='/' className='nav-link'>
                          Home
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/about' className='nav-link'>
                          About
                      </Link>
                      
                      
                  </li>
                  <li className='nav-item'>
                      <Link to='/travel' className='nav-link'>
                          Travel
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/services' className='nav-link'>
                          Service
                      </Link>
                  </li>
              </ul>
              <div className="hamburger" onClick={handleClick}>
                  {click ? (<FaTimes size={20} style={{ color: '#742f2f' }} />) :
                      (<FaBars size={20} style={{ color: '#8b4f4f' }} />)}
              </div>
          </nav>
    </header>
  )
}

export default Navbar