
import React from 'react'
import AbotNavbar from './AboutNavbar'
import image2 from '../../Images/e-image2.png'

const About = () => {
  return (
    <div>
      <AbotNavbar/>
      <div className="blog-hero-main">
        <div className="blog-hero-text">
         <h1>Welcome to LearnHub</h1><br/>
         <p style={{fontSize:'18px',fontWeight:'normal',marginTop:'0px'}}>Your Gateway to Seamless Online Learning</p>
         <p>At LearnHub, we believe in the power of education to transform lives.<br/> Our platform is designed to make learning accessible, engaging, and<br/> rewarding for learners worldwide. Whether you're a beginner looking to<br/> explore new subjects or a professional seeking to advance your career,<br/> LearnHub offers a wide range of high-quality courses to suit your needs.</p>
        </div>
        <div className="blog-hero-img-container">
          <img className='blog-hero-img' src={image2} alt="" />
        </div>
       </div>

       <div className="blog-hero-text" style={{marginTop:'50px',display:'flex'}}>
       {/* <p>Getting started with LearnHub is easy – even if you're new to online learning.<br/> Once you've created an account and logged in, you can begin browsing<br/> through our extensive collection of courses. With just a few clicks,<br/> you can enroll in the courses that interest you most. It's that simple!</p> */}
<div className="blog-hero-main" style={{marginLeft:'30px',marginTop:'30px'}}>
<h2>Why Choose LearnHub?</h2>
<ul>
  <li>Seamless Learning Experience: Our platform is built with a user-friendly interface, making it easy<br/> for learners to navigate and access their courses. Whether you're accessing LearnHub from your computer,<br/> tablet, or smartphone, you can enjoy a seamless learning experience every time.</li>
  <li>Extensive Course Collection: With LearnHub, you have access to a diverse range of courses covering<br/> various subjects and skill levels. From programming and digital marketing to photography and personal development,<br/> there's something for everyone on our platform.</li>
  <li>High-Quality Content: We partner with experienced instructors and industry experts to deliver courses that are informative,<br/> engaging, and up-to-date. You can trust that the content you're </li>
  <li>Empowering Learners and Organizations: Whether you're an individual learner or part of an organization,<br/> LearnHub is here to support your learning goals. We offer flexible learning solutions tailored<br/> to meet the needs of both learners and organizations alike.</li>
</ul>
</div>
<div className="div">
<img style={{width:'550px'}} src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1708285685~exp=1708286285~hmac=c18da469116e9ccad130cbf79a61b4d78c1ec19e820f0a81ef6df6978ae41e48" alt="" />
</div>
       </div>

       <div className="div" style={{marginLeft:'150px',marginTop:'80px'}}>
        <h1>Join the LearnHub Community Today!</h1>
        <p>Join the millions of learners who have already chosen LearnHub as their preferred<br/> platform for online learning. Whether you're looking to acquire new skills, advance your career, or<br/> simply pursue your passions, LearnHub is here to help you achieve your goals.</p>
        <p>Empower yourself with knowledge and take your learning journey to new heights with<br/> LearnHub. Get started today and unlock a world of opportunities!</p>
        <img style={{width:'150px',marginLeft:'200px'}} src="https://img.freepik.com/free-vector/thank-you-concept-illustration_114360-13427.jpg?w=996&t=st=1708286157~exp=1708286757~hmac=7ce1fc62e7ed93aa1481bf8e0e0037ea2b077c1a90358c51a38825227a50310b" alt="" />
       </div>
    </div>
  )
}

export default About