import React from "react";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = (props) => {
  return (
    <div className="welcome">
      <div className="welcome-cat-shopper">
        <h3>Welcome to CatShopper!</h3>
      </div>
      <div className="message">
        <h3>"Buying cats has never been this easy" - Local
           Cat Lady</h3>
      </div>
      {/* <img id='welcome-cat-shopper' src="bigcatshopper-removebg-preview.png" /> */}
    </div>
  );
};

export default Home;
