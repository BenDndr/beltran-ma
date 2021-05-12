import React from 'react';
import Card from './card';
import "./App.css";
import logo from './img/logo.gif';
import device from './img/devices.png';
import repa from './img/repa.png';
import data from './img/data.png';
import cd from './img/CD.png';

function App() {

  return(
    <div className="app">

      <div className="banner">
        <img src={logo} alt="logo beltran-ma" height="150" width="150"></img>
        <h1>Beltran-ma</h1>
        <p>Dépanage informatique à domicile</p>
        <div className="btn-box">
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
            Que vous rencontriez un problème hardware ou software, nous vous mettrons
            en relation avec notre expert qui mettra son savoir-faire à votre disposition.
          </p>
          <div className="title-box">
            <a href="#" className="btn">Prendre rendez-vous</a>
          </div>
          <center><img src={device} alt="divice logo"></img></center>
        </div>

        <div className="engagement">
          <div className="engagement-img">
          </div>
          <div className="engagement-txt">
            <h3 className="text-white">Notre engagement</h3>
            <p className="text-white">
              Afin de lutter contre le gaspillage et d'augmenter la durée de vie de
              votre materiel informatique, nos prestations vous permettront de conserver
              plus longtemp votre ordinateur ou votre smartphone. Vous pourrez ainsi
              économiser sur vos dépenses technologiques tout en faisant un geste
              éco-responsable.
            </p>
          </div>
        </div>

        <div className="prestation">
          <div className="title-box">
            <h2>Nos prestations</h2>
          </div>
            <div className="cards">
              <Card
                img={repa}
                name="Réparation d'appareil"
                message="Ordinateurs, smartphones et tablettes, nous donnons une
                deuxième vie à vos appareils. Quel que soit l’appareil que vous
                souhaitez faire réparer, nous ferons tout ce qui est possible
                pour lui donner une seconde vie."
                />
              <Card
                img={data}
                name="Récupération de données"
                message="Si vous avez perdu vos données, photos, documents
                professionnels ou autre, suite à une mauvaise manipulation ou
                pour toute autre raison, il est souvent possible de récupérer
                tout ou partie de vos données."
                />
              <Card
                img={cd}
                name="Transfert de films sur DD/DVD"
                message="Si vous souhaitez stocker vos données sur un support
                physique afin de limiter le risque de perte, nous vous proposons
                de gérer le transfert dans la confidentialité et le respect de
                votre vie privée. "
                />
            </div>
        </div>

        <div className="expert">
          <div className="e-cont">
            <div className="e-photo"></div>
            <div className="e-text">
              <h3 className="text-white">Notre Expert</h3>
              <p className="text-white">Marcel Beltran, Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
                adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
                Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin
                porttitor, orci nec nonummy molestie, enim est eleifend mi, non
                fermentum diam nisl sit amet erat.
              </p>
            </div>
          </div>
        </div>

        <div className="img-filler">
        </div>

        <div className="contact">
          <div className="title-box">
            <h3>Nous contacter</h3>
          </div>
          <p className="contact-p">Déplacement à domicile dans “zone géographique” disponible en semaine.
            N’hésitez à prendre contact avec nous pour faire un devis ou pour prendre
            rendez-vous.</p>
          <div className="contact-box">
            <p>
              <strong>Mail: beltran-ma@orange.fr</strong>
            </p>
            <p>
              <strong>Tél: 06 63 69 07 97 / 09 77 949 101</strong>
            </p>
          </div>
        </div>
      </div>



      <div className="footer">
        <p>© 2021 beltran-ma.fr</p>
        <div>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
        </div>
      </div>


    </div>
  );
}

export default App;
