import React, { useState } from 'react'
import '../../App.css'
import Cards from '../Cards'
import HeroSection from '../HeroSection'
import Footer from '../Footer'

function Home(props) {
  const [choosedItem, setChoosed] = useState('All')
  const itemArr = ['All', 'Beer', 'Wine', 'Spirits', 'Cider']
  const choosedKey = (key) => {
    setChoosed(itemArr[key])
    console.log(itemArr[key])
  }

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <HeroSection choosedKey={choosedKey} />
        <Cards choosedItem={choosedItem} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
