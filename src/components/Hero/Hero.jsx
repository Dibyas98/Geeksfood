import React from "react";
import "./hero.css";

export default function Hero({mode}) {
  console.log(mode);
  return (
    <div className="hero">
      <div className="text-hero">
        <h1>Let us find your <span> Forever Food.</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <div className="hero-btn">
            <a href=""><button>Search Now</button></a>
            <a href=""><button id="know">Know More</button></a>
        </div>
      </div>
    </div>
  );
}
