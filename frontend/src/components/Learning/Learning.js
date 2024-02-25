import style from './style.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Learning = () => {
  const Navigate=useNavigate()
  return (
    <div>
       <div className="main">
        <div className="img-container">
         <img className='img' src="https://img.freepik.com/premium-vector/student-concept-illustration_598748-348.jpg?size=626&ext=jpg&ga=GA1.1.537376815.1669047175&semt=ais" alt="" />
        </div>
        <div className="learning-text-container">
         <h1 id='sub-container-text'>LearnHub and the</h1>
         <p id='paragraph-text'>LearnHub is the leading for <br/>
            online learning. Our platform is<br/>
            desinged to provide a seamless and <br/>
            engaging learning experience for<br/>
            learners worldwide.With your user-<br/>
            friendly interface and high-quality<br/>
            courses, you can enhance your skills.</p>

            <button type="button" className='learning-btn' onClick={()=>Navigate('/explore')}>Start Learning</button>
        </div>
       </div>
    </div>
  )
}

export default Learning