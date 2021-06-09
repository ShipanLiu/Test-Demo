import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, withRouter } from 'react-router-dom'
import {
  HomeOutlined,
  BackwardOutlined,
  ForwardOutlined,
  CloseOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Input, Space } from 'antd'
const { Search } = Input

function Navbar(props) {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [loading, setloading] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  const onChange = (e) => {
    setSearchValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    props.onSearch(searchValue)
    setSearchValue('')
    props.history.push('/products')
    console.log(props)
  }

  const goBackToHome = () => {
    closeMobileMenu()
    return 'All'
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-links nav-home" onClick={goBackToHome}>
          <HomeOutlined />
        </Link>
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li></li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                <BackwardOutlined />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                <ForwardOutlined />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <CloseOutlined />
              </Link>
            </li>
          </ul>
        </div>
        {/* <Search
          className="search-bar"
          placeholder="input search text"
          // allowClear
          enterButton="Search"
          size="large"
          style={{ marginRight: '5rem' }}
          // loading={loading}
          onSearch={onSearch}
          value={searchValue}
        /> */}
        <form className="search-bar" onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onChange}
            placeholder="search here"
            value={searchValue}
          />
          <button>search</button>
        </form>
      </nav>
    </>
  )
}

export default withRouter(Navbar)
