

import React from 'react'
import Blognavbar from './BlogNavbar'
import { useEffect } from 'react'

import style from './style.css'
import Footer from '../../components/Footer/Footer'
import image1 from '../../Images/e-image.png'

const Blog = () => {
  useEffect(() => {
    document.title = "LearnHub-Blog"; // Set title for about page
  }, []);
  return (
    <div className='blog-main-container'>
        <Blognavbar/>
       <div className="blog-hero-main">
        <div className="blog-hero-text">
         <h1>Where<br/> possibilities<br/> begin</h1>
         <p style={{fontSize:'18px',fontWeight:'normal',marginTop:'20px'}}>We’re a leading marketplace platform<br/> for learning and teaching online. Explore some<br/> of our most popular content and learn<br/> something new.</p>
        </div>
        <div className="blog-hero-img-container">
          <img className='blog-hero-img' src={image1} alt="" />
        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Blog