import React, { useState, useRef, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import './Navbar.css'
// import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  BackwardOutlined,
  ForwardOutlined,
  CloseOutlined,
} from '@ant-design/icons'

function Navbar(props) {
  const [click, setClick] = useState(false)
  let history = useHistory()
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const inputRef = useRef()

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value.trim()
    console.log(inputValue)
    if (inputValue.length === 0) {
      return
    } else {
      inputRef.current.value = ''
      props.onSearch(inputValue)
      history.push('/products')
    }
  })

  const goBackToHome = useCallback(() => {
    closeMobileMenu()
    // // refresh the page
    inputRef.current.value = ''
    history.push('/home')
  })
  const deleteInput = useCallback(() => {
    inputRef.current.value = ''
    history.push('/home')
  })
  return (
    <>
      <nav className="navbar" data-testid="navbar">
        <div className="nav-links nav-home" onClick={goBackToHome}>
          <CloseOutlined />
        </div>
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li></li>
            <li className="nav-item">
              <div className="nav-links">
                <BackwardOutlined />
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-links">
                <ForwardOutlined />
              </div>
            </li>
            <li className="nav-item">
              <div to="/" className="nav-links" onClick={deleteInput}>
                <HomeOutlined />
              </div>
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

export default Navbar
