/* eslint-disable max-len */
// Import Style
import './project.scss';

// import picture
import snakeGame from 'src/assets/images/SnakeGameEnd.PNG';
import brickBreaker from 'src/assets/images/brickBreaker.PNG';
import monApp from 'src/assets/images/monApp.PNG';
import accueil from 'src/assets/images/accueil.gif';

const Project = () => (
  <div className="projectContainer">
    <h1 className="competences_content-title"><a className="competences_content-title-lien" href="/"> <img className="competences_content-title-img" src={accueil} alt="logo accueil" /></a> Projets</h1>
    <p className="intro">Voici mes projets perso réalisés ou à venir...</p>
    <div className="project">
      <card className="project_card">
        <img className="project_card-img" src={snakeGame} alt="projet" />
        <h3 className="project_card-title">SnakeGame</h3>
        <p className="project_card-content">Petit Jeu du traditionnel Snake, techno utilisé: html, css, javascript</p>
        <a
          className="project_card-link"
          href="https://adhesive-tub.surge.sh/"
          rel="noreferrer"
          target="_blank"
        >
          Lien de l'app
        </a>
        <a
          className="project_card-link"
          href="https://github.com/Chris-Verichon/SnakeGame"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </card>
      <card className="project_card">
        <img className="project_card-img" src={brickBreaker} alt="projet" />
        <h3 className="project_card-title">BrickBreaker</h3>
        <p className="project_card-content">Casse brique, techno utilisé: html, css, javascript</p>
        <a
          className="project_card-link"
          href="https://tawdry-view.surge.sh/"
          rel="noreferrer"
          target="_blank"
        >
          Lien de l'app
        </a>
        <a
          className="project_card-link"
          href="https://github.com/Chris-Verichon/brickBreaker-js"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </card>
      <card className="project_card">
        <img className="project_card-img" src={monApp} alt="projet" />
        <h3 className="project_card-title">Mon site perso</h3>
        <p className="project_card-content">Application pour me présenter c'est un peu comme ma carte de visite numérique. Techno utilisé: ReactJs, javascript,  Sass, Css, Html</p>
        <a
          className="project_card-link"
          href="https://tawdry-view.surge.sh/"
          rel="noreferrer"
          target="_blank"
        >
          Lien de l'app
        </a>
        <a
          className="project_card-link"
          href="https://github.com/Chris-Verichon/portefolio"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </card>
    </div>
    <div className="projectIntro">
      <ul className="projectIntro_list">
        J'ajouterais dans pas longtemps également 2 autres projets:
        <li className="projectIntro_list-item">
          Mon projet professionnel de fin de formation
          qui est une application de recherche d'emplois/candidats. Techno utiliser ReactJs, Javascript, Sass, Html, PHP, Symfony.
        </li>
        <li className="projectIntro_list-item">
          Egalement un projet perso pour un amis qui fait de la création d'objets en bois (boite, lampe, ...), son application vitrine avec un back office pour gérer les photos et le contenu manuscrit. Techno utilisé: Html, Css, Javascript, PHP, un MVC from scratch avec base de donnée MariaDB, utilisation de PDO pour requêtes SQL.
        </li>
      </ul>
    </div>
  </div>
);

export default Project;
