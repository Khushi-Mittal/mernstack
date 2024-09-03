import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Unlock Powerful Store</h1>
        <h1>Management Tools</h1>
        <p>Discover the Admin Panel</p>
        <button onClick={()=>{window.location.href='https://mernstack-six.vercel.app/addproduct'}}>Admin Panel</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
