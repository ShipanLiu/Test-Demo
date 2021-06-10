import React, { useState, useRef, useCallback } from 'react'
import './Navbar.css'
import { Link, withRouter } from 'react-router-dom'
import {
  HomeOutlined,
  BackwardOutlined,
  ForwardOutlined,
  CloseOutlined,
} from '@ant-design/icons'

function Navbar(props) {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const inputRef = useRef()

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false)
  //   } else {
  //     setButton(true)
  //   }
  // }

  // const onChange = (e) => {
  //   setSearchValue(e.target.value)
  //   console.log(searchValue)
  // }

  // const itemArr = [
  //   'All',
  //   'Beer',
  //   'Wine',
  //   'Spirits',
  //   'Cider',
  //   'all',
  //   'beer',
  //   'wine',
  //   'spirits',
  //   'cider',
  // ]

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value.trim()
    console.log(inputValue)
    if (inputValue.length === 0) {
      return
    } else {
      inputRef.current.value = ''
      props.onSearch(inputValue)
      props.history.push('/products')
    }
  })

  const goBackToHome = useCallback(() => {
    closeMobileMenu()
    // // refresh the page
    inputRef.current.value = ''
    props.history.push('/home')
  })
  const deleteInput = useCallback(() => {
    inputRef.current.value = ''
  })
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-links nav-home" onClick={goBackToHome}>
          <CloseOutlined />
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
              <Link to="/" className="nav-links" onClick={deleteInput}>
                <HomeOutlined />
              </Link>
            </li>
          </ul>
        </div>
        <form className="search-bar" onSubmit={onSubmit}>
          <input type="text" placeholder="search here" ref={inputRef} />
          <button>search</button>
        </form>
      </nav>
    </>
  )
}

export default withRouter(Navbar)
