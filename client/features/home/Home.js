import React from "react";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = (props) => {
  return (
    <div className="welcome">

      <video id='cat-video' autoPlay muted loop>
        <source src='cat_in_the_sun.mp4' type='video/mp4' />
      </video> 
      <div className='welcome-message'>Find Your Forever Friend</div>
      <button className='welcome-button'>Explore</button>
    </div>
  );
};

export default Home;
