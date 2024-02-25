


import React from 'react';
import ExploreNavbar from '../../components/Navbar/ExploreNavbar/ExploreNavbar';
import { useSearch } from '../../Context/SearchContext';
import Card from '../../components/Card/Card';
import { useCart } from '../../Context/CartContext';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
    const [values] = useSearch(); 
    console.log(values)
    const [cart,setCart] = useCart(); // Get the cart state and setter


    return (
        <div>
            <ExploreNavbar/>
            <div className="explore-container">
                {values.results.map(result => (
                    // <Card
                    //     key={result._id}
                    //     cardId={result._id}
                    //     title={result.title}
                    //     description={result.description}
                    //     imageUrl={`http://localhost:5000/api/course/product-photo/${result._id}`}
                    //     price={result.price}
                    //     onAddToCart={() => addToCart(result)} // Pass a function to handle adding to cart
                    // />
                    <div className="card" key={result._id}>
                    <img src={`https://learnhub-eservices.onrender.com/api/course/product-photo/${result._id}`} className="card-img" alt={result.title} />
                    <div className="card-text-container">
                    <h3 className="card-title">{result.title}</h3>
                    {/* <p className='card-rating'>{result.rating}⭐</p> */}
                    <p className="card-desc">{result.description}</p>
                    <div className="flex-container">
                      <h4 className="card-price">Rs.{result.price}</h4>
                      <button className='cart-btn' onClick={()=>{setCart([...cart,result])
                        localStorage.setItem('cart',JSON.stringify([...cart,result]))
                        toast.success("Item Added To cart")
                      }} >
                        Add To Cart
                      </button>
                    </div>

                    </div>
                   
                  </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
