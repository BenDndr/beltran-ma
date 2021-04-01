import React from 'react';
import "./App.css";

function Card({name, message, power}) {
  return(
    <div className="Card">
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>{power}</h3>
    </div>
  );
}

export default Card;
