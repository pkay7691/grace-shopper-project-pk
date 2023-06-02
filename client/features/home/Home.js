import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

/**
 * COMPONENT
 */
const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <video id="cat-video" autoPlay muted loop>
        <source src="cat_in_the_sun.mp4" type="video/mp4" />
      </video>
      <div className="welcome-message">Find Your Forever Friend</div>
        <button onClick={(e) => navigate('/products')} className="welcome-button">Explore</button>
   
    </div>
  );
};

export default Home;
