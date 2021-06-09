import React from 'react';
import Card from './card';
import "./App.css";
import logo from './img/logo.gif';
import device from './img/devices.png';
import repa from './img/repa.png';
import data from './img/data.png';
import cd from './img/CD.png';
/* import ReactGA from 'react-ga'; */

function App() {

  /* ReactGA.initialize('UA-199076446-1');
  ReactGA.pageview('/'); */

  return(
    <div className="app">

      <div className="banner">
        <img src={logo} alt="logo beltran-ma" height="150" width="150"></img>
        <h1>Beltran-ma</h1>
        <p>Dépanage informatique à domicile</p>
        <div className="btn-box">
          <a href="mailto:beltran-ma@orange.fr" className="btn">Contact</a>
        </div>
      </div>

      <div className="app-body">
        <div className="pres">
          <div className="title-box">
            <h2><center>Réparation de materiel informatique</center></h2>
          </div>
          <p>
            Dépanage informatique pour tout type d'appareil, sur site ou à l'attelier.
            Que vous rencontriez un problème hardware ou software ou que vous souhaitiez
            simplement retrouver les performances d'origine de votre ordinateur, nous vous proposons
            une assistance informatique dans les 72h. En plus de la réparation, nous
            répondrons à vos éventuelles questions et nous vous conseillerons pour
            une meilleure utilisation de votre ordinateur.
          </p>
          <div className="title-box">
            <a href="mailto:beltran-ma@orange.fr" className="btn">Prendre rendez-vous</a>
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
              plus longtemps votre ordinateur ou votre smartphone. Vous pourrez ainsi
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
                name="Transfert de films sur CD/DVD"
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
              <p className="text-white">
                Marcel Beltran, titulaire d’un bac informatique et avec plus de
                20 ans d’expérience, met son expertise à votre disposition. Très
                pédagogue et passionné, Marcel à pu répondre aux attentes de plus
                de 10 000 clients et plus de 400 entreprises avec un taux de satisfaction
                des plus élevés. Entouré de 4 collaborateurs compétents, nous travaillons
                également avec des entreprises expertes dans leur domaine, comme Microsoft
                France, Kaspersky France, Ontrack, EasyRecovery Professionnal et bien d’autres.
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
          <p className="contact-p">Déplacement à domicile à Saint-Jean d'Illac, Martignas-sur-Jalle, Cestas, Le Haillan, Canéjan et Mérignac.
           disponible du <strong>lundi au vendredi de 9h à 12h et de 15h à 19h30 et le samedi de 9h à 12h</strong>.
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
          <div className="title-box">
            <a href="mailto:beltran-ma@orange.fr" className="btn">Prendre rendez-vous</a>
          </div>
        </div>
      </div>



      <div className="footer">
        <p>© 2021 beltran-ma.fr</p>
        <div>
          <a href="https://www.facebook.com/beltran.ma.5"><i className="fab fa-facebook-square"></i></a>
        </div>
      </div>


    </div>
  );
}

export default App;
