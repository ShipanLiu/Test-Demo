import React from 'react'
// import '../../App.css'
import Cards from '../Cards'
import HeroSection from '../HeroSection'
import { Divider } from 'antd'

function Home() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <HeroSection />
        <Cards />
      </div>
    </div>
  )
}

export default Home
