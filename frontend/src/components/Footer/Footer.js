
import React from 'react'
import style from './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faWhatsapp,faFacebook } from '@fortawesome/free-brands-svg-icons'; 


const Footer = () => {
  return (
    <div>
      <div className="footer-main">
     <div className="footer-heading">
       <h3 >People choose LearnHub Business to build in-demand career skills.</h3>
     </div>
     <hr/>
     <div className="pages-container">
      <ul style={{listStyle:'none',fontSize:'14px',display:'flex'}}>
        <a href="/contact" className='link'> <li>Contact Us</li></a>
        <a href="/about" className='link'> <li>About Us</li></a>
        <a href="/" className='link' ><li>LearnHub</li></a>
        <a href="/blog" className='link'><li>Blog</li></a>
        
      </ul>
      {/* <ul style={{listStyle:'none',marginLeft:'65px',fontSize:'14px'}}>
      <li>Contact Us</li>
        <li>About Us</li>
        <li>LearnHub</li>
        <li>Blog</li>
      </ul>
      <ul style={{listStyle:'none',marginLeft:'65px',fontSize:'14px'}}>
      <li>Contact Us</li>
        <li>About Us</li>
        <li>LearnHub</li>
        <li>Blog</li>
      </ul> */}
     </div>
     <div className="bottom-container">
      <h2 className='footer-logo'>LearnHub</h2>
      <p className='footer-paragraph-text' style={{marginTop:'10px'}}>copyright @LearnHub 2024</p>
     </div>

     <div className="social-icons">
     {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
     <a href="https://www.instagram.com/harsh_45264?igsh=MXVzdXBybDRpZGx5Yw==" className='icon-link'> <p className='social-icon'><FontAwesomeIcon className='social-icon' icon={faInstagram} size='140px' /></p> </a>
    <a href="https://www.linkedin.com/in/harsh-satpute-43399023a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><p className='social-icon'><FontAwesomeIcon className='social-icon' icon={faLinkedinIn} /></p></a> 
  <a href="https://wa.link/9fn5rk"> <p className='social-icon'> <FontAwesomeIcon className='social-icon' icon={faWhatsapp} /></p></a> 
    {/* <a href=""><p className='social-icon'><FontAwesomeIcon className='social-icon' icon={faFacebook} /></p></a>  */}
     </div>
      </div>
    </div>
  )
}

export default Footer