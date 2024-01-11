import React from "react";
import "./card.css";
import card_1 from "./card-1.avif";

export default function Card(props) {
  return (
    <div className= {`card ${props.mode}back`}>
      <div className= {`right-card`}>
        <div className="right-card-text">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <button>Get in Touch</button>
        </div>
      </div>
      <div className="left-card">
        <img src={card_1} alt="" />
      </div>
    </div>
  );
}
