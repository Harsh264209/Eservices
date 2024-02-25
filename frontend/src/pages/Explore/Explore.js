


import React, { useState, useEffect } from 'react';
import ExploreNavbar from '../../components/Navbar/ExploreNavbar/ExploreNavbar';
import Card from '../../components/Card/Card';
import CategoryList from './FetchCategoryComponent/FetchCategory';
import Carousel from '../../components/carousel/Carousel'
import axios from 'axios';
import Footer from '../../components/Footer/Footer'
import img from '../../Images/image1.png'
import './style.css'; // Import the CSS file for styling

const Explore = () => {
  const [cardsData, setCardsData] = useState([]);
  const [categoryName, setCategoryName] = useState('All'); // Initialize categoryName state
  const [loading, setLoading] = useState(true); // Define loading state

  useEffect(() => {
    // Fetch all courses by default
    axios.get('https://learnhub-eservices.onrender.com/api/course/all')
      .then(response => {
        setCardsData(response.data.courses);
        setLoading(false); // Update loading state after data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Update loading state in case of error
      });
  }, []);

  const getCategoryName = async (categoryId) => {
    try {
      const response = await axios.get(`https://learnhub-eservices.onrender.com/api/category/${categoryId}`);
      return response.data.name;
    } catch (error) {
      console.error('Error fetching category name:', error);
      return '';
    }
  };

  const handleCategoryChange = async (courses) => {
    setCardsData(courses);
    if (courses.length > 0 && courses[0].category) {
      const categoryName = await getCategoryName(courses[0].category);
      setCategoryName(categoryName);
    }
  };

  return (
    <>
      <ExploreNavbar />
      <div className="explore-hero-container">
        <div className="explore-text-container">
         <h1 className='explore-text-container-heading'><span className='explore-heading'> Discover Your Path:</span> <br/>  <span className='explore-sub-heading'>Browse Our Array of <br/>Online Learning Opportunities</span></h1>
         <p className='explore-text-container-paragraph' style={{marginTop:'30px',color:'8f8b8b'}}>Embark on a journey of personal and professional growth with our diverse selection<br/> of online courses. Whether you're looking to enhance your skills, pursue a new passion,<br/> or advance your career,our platform offers a wealth of opportunities tailored to your needs. <br/> From digital marketing to creative writing, programming to mindfulness,our expertly <br/> crafted courses are designed to empower you to thrive in an ever-evolving world.<br/>  Explore our catalog today and unlock the doors to endless possibilities.</p>
        </div>
        <div className="explore-img-container">
        {/* <img className='explore-img' src="https://images.pexels.com/photos/6457577/pexels-photo-6457577.jpeg" alt="" /> */}
      <img className='explore-img' src={img} alt="" />
        </div>
      </div>
      <div className="Heading-text">
        <h1>All the skills you need in one place</h1>
        <p className='p-text'>From critical workplace skills to technical topics, our catalog supports well-rounded professional development.</p>
      </div>
      <div className="category-list" style={{ marginTop: '20px' }}>
        <CategoryList onCategoryChange={handleCategoryChange} />
        <h2 className='category-name-heading'>{categoryName} Courses</h2> {/* Display the selected category name */}
      </div>
      <div className="explore-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          cardsData.map(card => (
            <Card
              card={card}
              cardId={card._id}
              rating={card.ratings}
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl={`https://learnhub-eservices.onrender.com/api/course/product-photo/${card._id}`}
              price={card.price}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Explore;




