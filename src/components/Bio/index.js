/* eslint-disable max-len */
// Import
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
// Import style
import './style.scss';
import accueil from 'src/assets/images/accueil.gif';
import chris from 'src/assets/images/Chris.jpg';

const Bio = () => {
  console.log('a propos');
  return (
    <Fade left>
      <div className="bioContainer">
        <div className="underBioContainer">
          <h1 className="title"><Link className="title_link" to="/"> <img className="title_img" src={accueil} alt="logo accueil" /></Link>A Propos</h1>
          <div className="bio">
            <h2 className="bio_title">Auteur... :</h2>
            <h2 className="bio_subtitle">Christophe VERICHON</h2>
            <p className="bio_legend">Développeur Web Fullstack</p>
            <img src={chris} alt="christophe" className="bio_img" />
            <p className="bio_intro">
              Recemment reconverti dans le développement web, j'étais avant Manager d'équipe, avec en charge des unités de production.
            </p>
            <p className="bio_intro">
              J'ai suivi une formation "développeur web et web mobile" avec l'école O'clock.
              J'ai pu acquérir les bases de la programmation web avec Php, Html, Css, Javascript, Wordpress.
              J'ai suivi par la suite une double spécialisation, avec Symfony côté back-end et Reactjs côté front-end.
            </p>
            <h2 className="bio_title">Mes passions :</h2>
            <p className="bio_content">
              En premier lieu je suis passionné d'informatique, j'ai décidé de sauter le pas cette année pour en faire mon métier.
            </p>
            <p className="bio_content">
              Mais pas que j'ai aussi une passion pour l'escalade que je pratique en club, également à Fontainebleau et aussi en vacance lorsque c'est possible.
            </p>
            <p className="bio_content">
              Et également passionné d'Astronomie, j'ai un petit setup sympa "Celestron NexStar 130 SLT GoTo", loin d'être le plus fou mais déja de quoi s'amuser avec plusieurs oculaires de 5mm gros grossissement pour observer le planétaire à 50mn pour tenter d'observer le ciel profond.
            </p>
          </div>
          <div className="footer">
            <p>
              Copyright - Christophe VERICHON - 2022
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Bio;
