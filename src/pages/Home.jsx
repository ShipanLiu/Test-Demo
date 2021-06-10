import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import '../App.css'
import { CSSTransition } from 'react-transition-group'
import Cards from '../components/Cards/Cards'
import Filter from '../components/Filter/Filter'
import Footer from '../components/Footer/Footer'

function Home(props) {
  const [choosedItem, setChoosed] = useState('All')
  let history = useHistory()

  // const itemArr = ['All', 'Beer', 'Wine', 'Spirits', 'Cider']

  const choosedKey = useCallback((key) => {
    const itemArr = ['All', 'Beer', 'Wine', 'Spirits', 'Cider']
    setChoosed(itemArr[key])
    console.log(itemArr[key])
  })

  return (
    <>
      <CSSTransition
        in={history.location.pathname === '/home'}
        classNames="card"
        timeout={700}
        unmountOnExit
        appear
      >
        <div className="home-container">
          <div className="home-wrapper">
            <Filter choosedKey={choosedKey} />
            <Cards choosedItem={choosedItem} />
          </div>
          <Footer />
        </div>
      </CSSTransition>
    </>
  )
}

export default Home
