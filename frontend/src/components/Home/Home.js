import Navbar from '../Navbar/Navbar'
import HomePage from '../HomePage/HomePage'
import Learning from '../Learning/Learning'
import Discover from '../Discover/Discover'
import Explore from '../Explore/Explore-content'
import StickyFooter from '../Footer/Footer'
import React from 'react'

const Home = () => {
  return (
    <div>
         <Navbar/>
    <HomePage/>
    <Learning/>
    <Discover/>

    {/* <Explore/> */}
   <StickyFooter/>
    </div>
  )
}

export default Home