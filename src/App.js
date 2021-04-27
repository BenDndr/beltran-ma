import React from 'react';
import Card from './card';
import "./App.css";

function App() {

  return(
    <div className="app">

      <div className="banner">
        <h1>Beltran-ma</h1>
        <p><strong>Dépanage informatique à domicile</strong></p>
        <div class="btn-box">
          <a href="#" className="btn">Contact</a>
        </div>
      </div>

      <div className="app-body">
        <div className="pres">
          <div className="title-box">
            <h2><center>Réparation de materiel informatique</center></h2>
          </div>
          <p>
            Dépanage informatique pour tout type de pc, sur site ou à l'attelier.
          </p>
          <div class="title-box">
            <a href="#" className="btn">Prendre rendez-vous</a>
          </div>
          <div className="title-box">
            <h3>Notre engagement</h3>
          </div>
          <p>
            Afin de lutter contre le gaspillage et d'augmenter la durée de vie de
            votre materiel informatique, nos prestation vous permettront de conserver
            plus longtemp votre ordinateur ou votre smartphone.
          </p>
        </div>

        <div className="prestation">
          <div className="title-box">
            <h2>Nos prestations</h2>
          </div>
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
          <div className="title-box">
            <h2>Notre expert</h2>
          </div>
          <div className="e-cont">
            <div className="e-photo"></div>
            <div className="e-text">
              <h3>Marcel Beltran</h3>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="title-box">
            <h3><center>Nous contacter</center></h3>
          </div>
          <ul>
            <li>Mail: beltran.ma@orange.fr</li>
            <li>Mobile: 06 63 69 07 97</li>
            <li>Téléphone: 09 77 949 101</li>
          </ul>
        </div>
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
