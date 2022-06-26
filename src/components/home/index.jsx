import React from 'react'
import About from '../about'
import Footer from '../footer'
import Mountain from '../mountain'
import Navbar from '../navbar'
import Service from '../service'
import Travel from '../travel'

const Home = () => {
  return (
      <div>
      <Navbar />
      <Mountain />
      <About />
      <Travel />
      <Service />
      <Footer/>
    </div>
  )
}

export default Home