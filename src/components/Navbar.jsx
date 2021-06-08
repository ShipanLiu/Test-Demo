import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  BackwardOutlined,
  ForwardOutlined,
  CloseOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Input, Space } from 'antd'
const { Search } = Input

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-links nav-home" onClick={closeMobileMenu}>
          <HomeOutlined />
        </Link>
        <div className="navbar-container">
          {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            WorldEx
            <i className="fas fa-cat" />
          </Link> */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li></li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <BackwardOutlined />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <ForwardOutlined />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <CloseOutlined />
              </Link>
            </li>
          </ul>
        </div>
        <Search
          className="search-bar"
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          style={{ marginRight: '5rem' }}
          // onSearch={onSearch}
        />
      </nav>
    </>
  )
}

export default Navbar
