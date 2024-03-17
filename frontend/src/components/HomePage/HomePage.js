
import style from './style.css'
import React from 'react'
import { useUserAuth } from '../../Context/UserAuthContext'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

  const{user,setUser}=useUserAuth()
  const Navigate=useNavigate()
  return (
    <div>
      {/* <h2>{JSON.stringify(user)}</h2> */}
       <h1 id='heading-text'>How does <span className='highlighter- wd_highlight1'>LearnHub work?</span></h1>
       <div className='main-container'>
  
       
        <div className='text-container'>
            <h1 id='sub-heading-text' >Getting started with</h1>
            <p id='paragraph-text'> As a new learner, you can easily start using <br/>
            LearnHub without any techical Knowledge.Once<br/>
            you've created an account ang logged in , you can<br/>
            browse through our extensive collection of courses<br/>
            and enroll in the ones that's interest you ,It's that.</p>
            
            <button className='learn-btn' onClick={()=>Navigate('/about')}>Learn More</button>
         
        </div>
        <div className='home-img-container'>
            <img className='img' src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=626&ext=jpg&ga=GA1.1.537376815.1669047175&semt=ais" alt="" />
        </div>
       </div>
    </div>
  )
}

export default HomePage