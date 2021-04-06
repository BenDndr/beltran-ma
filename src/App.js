import React from 'react';
import Card from './card';
import "./App.css";

function App() {

  return(
    <div className="app">

      <div className="banner">
        <h1>Beltran-ma</h1>
        <p><strong>Dépanage informatique</strong></p>
        <a href="#" className="btn">Contact</a>
      </div>

      <div className="pres">
        <h2>Qui sommes nous ?</h2>
        <p>
          Dépanage informatique pour tout type de pc, sur site ou à l'attelier.
        </p>
        <h3>Notre philosophie</h3>
        <p>
          Lorem ipsum
        </p>
      </div>

      <div className="prestation">
        <h2>Nos prestations</h2>
        <div className="cards">
          <Card
            name="Réparation d'appareil"
            message="Prolongez la durée de vie de votre appareil.
            Ordinateurs, Smartphones et Tablettes, nous donnons
            une deuxième vie à vos appareils."
            />
          <Card
            name="Récupération de données"
            message="Vous avez perdu vos données suite à une mauvaise
            manipulation ? Pas de soucis on les récupère pour vous."
            />
          <Card
            name="Transfert de films sur DD/DVD"
            message="Stockez vos données sur des supports physique
            et conservez un backup de toutes vos données."
            />
        </div>
      </div>

      <div className="expert">
        <h2>Notre expert</h2>
        <div className="e-cont">
          <div className="e-photo"></div>
          <div className="e-text">
            <h3>Marcel Beltran</h3>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>

      <div className="contact">
        <h3>Nous contacter</h3>
        <p>

        </p>
      </div>

      <div className="footer">
        <p>© 2021 beltran-ma.fr</p>
        <div>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter-square"></i>
        </div>
      </div>

    </div>
  );
}

export default App;
