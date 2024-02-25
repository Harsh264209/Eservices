
import React from 'react'

const Carousel = () => {
  return (
    <div className="carousel-container">
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner" style={{width:'100%',padding:"0px 100px",height:'450px'}}>
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/7267404/pexels-photo-7267404.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/3967031/pexels-photo-3967031.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/6457577/pexels-photo-6457577.jpeg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  
  )
}

export default Carousel


       

