import React from "react";
import about from "../img/about_2.jpg";

function ImageSection() {
  return (
    <div className="image-section">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span>Uthaman Muthaiah</span>
        </h4>
        <p className="about-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non neque
          dolores iste accusantium doloribus placeat?
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Uthaman Muthaiah</p>
            <p>: 34</p>
            <p>: Malaysia</p>
            <p>: Tamil, Malay, English</p>
            <p>: No 8, Jalan Sentosa 8 Banting</p>
            <p>: Malaysia, India</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
