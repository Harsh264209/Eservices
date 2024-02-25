import style from './Style.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Discover = () => {
  const navigate=useNavigate()
  return (
    <div>
        <div className="discover-main-container">
            <div className="discover-text-container">
            <h1 id='sub-text'>Expand your Knowledge <br/>
            with LearbHub</h1>
            <p id='p-text'>LearnHub empowers learners and <br/>
               organisation</p>
               <button className='discover-btn' onClick={()=>navigate('/blog')}>Discover More</button>
            </div>
            <div className="discover-img-container">
                <img className='discover-img' src="https://img.freepik.com/free-vector/young-man-running-up-stair-grabbing-graduation-cap-vector-illustration-cartoon-doodles-style_73637-640.jpg?size=626&ext=jpg&ga=GA1.1.537376815.1669047175&semt=ais" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Discover