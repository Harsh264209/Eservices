import style from './style.css'
import React from 'react'

const Explore = () => {
  return (
    <div>
        <div className="main">
            <div className="img-container">
                <img src="https://img.freepik.com/free-vector/hand-hold-stack-books-genius-boy-hand-drawn-sketch-vector-illustration_460848-14902.jpg?w=740&t=st=1705010371~exp=1705010971~hmac=5d962e6826dd53358b15afe1d449b017f5861b8c1332077dbd795ac76cbb41ab" alt="" />
            </div>
            <div className="text-container">
                <h1>Enhance your learning <br/>
                    experience</h1>
                <p>Discover How LearnHub user-friendly's<br/>
                  platform has revolutionized online learning <br/>
                   making it easier and faster for<br/>
                    learners to access high quality courses <br/>
                    and gain valuable knowledge. Join us <br/>
                    today and unlock your full learning.</p>
                <button className='explore-btn'>Explore Now</button>
            </div>
        </div>
    </div>
  )
}

export default Explore