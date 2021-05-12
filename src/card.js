import React from 'react';
import "./App.css";

function Card({name, message, img}) {
  return(
    <div className="card">
      <div className="card-img">
        <img src={img} alt="img-presta"></img>
      </div>
      <div className="card-text">
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Card;
