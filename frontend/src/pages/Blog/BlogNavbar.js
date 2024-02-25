

import React from 'react'
import {useNavigate} from 'react-router-dom'
import style from './style.css'

const BlogNavbar = () => {
  
  const navigate=useNavigate()
  return (
    <div>
        <div className="blog-navbar">
            <div className="" style={{display:"flex"}}>
            <h3>LearnHub</h3>
            <p style={{marginTop:'6px',marginLeft:'20px'}}>Blog</p>
            </div>
            <div className="blog-nav-btn-container">
                <button className="blog-nav-btn" onClick={()=>{navigate('/explore')}}>
                    Explore LearnHub Courses
                </button>
            </div>
        </div>
    </div>
  )
}

export default BlogNavbar