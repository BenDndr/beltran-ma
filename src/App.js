import React from 'react';
import Card from './card';
import "./App.css";

function App() {

  return(
    <div className="app">
      <div className="Banner">
        <h1>Marcel Beltran</h1>
        <h2>Dépanage informatique</h2>
        <a href="#">Contact</a>
      </div>
      <div className="Pres">
        <p>
          Dépanage pour tout type de pc, sur site ou à l'attelier.
        </p>
        <Card name="billy" message="ché" power="beuré"/>
      </div>

    </div>
  );
}

export default App;
