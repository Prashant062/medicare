import "../styles/Customers.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../../images/gatsby-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const Customers = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://admin.tomedes.com/api/v1/get-reviews"
      );
      setReviews(response.data.data);
    } catch (error) {
      console.error("Error fetching reviews: ", error);
      alert("Failed to load reviews. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, reviews.length - 2));
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <>
      <div className="Customers-container">
        <div className="Customers-title">
          <h1>What Our Customers Say</h1>
        </div>
        <div className="card-content">
          {loading ? (
            <p>Loading...</p>
          ) : reviews.length > 0 ? (
            reviews.slice(currentIndex, currentIndex + 2).map((review) => (
              <div className="comment" key={review.ID}>
                <div className="comment-comma">
                  <h1>"</h1>
                </div>
                <div className="comment-title">
                  <p>{truncateText(review.Reviews, 20)}</p>
                </div>
                <div className="user-details">
                  <img src={Logo} alt={`${review.Name}'s company logo`} />
                  <h6>{review.Name}</h6>
                  <p>{review.Company}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews available at the moment.</p>
          )}
        
        </div>
      </div>
        <div className="btn">
        <button
            onClick={prevReview}
            disabled={currentIndex === 0}
          >
           <FontAwesomeIcon  icon={faAngleLeft} />
          </button>
          
          <button
            onClick={nextReview}
            disabled={currentIndex >= reviews.length - 2}
          >
          <FontAwesomeIcon  icon={faAngleRight} />
          </button>
        </div>
    </>
  );
};

export default Customers;
