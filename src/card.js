import React from 'react';
import "./App.css";

function Card({name, message}) {
  return(
    <div className="card">
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
  );
}

export default Card;
