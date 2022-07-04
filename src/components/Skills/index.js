import './style.scss';
import accueil from 'src/assets/images/accueil.gif';
import { useSelector } from 'react-redux';

const Skills = () => {
  const { myData } = useSelector((state) => state.personnal);
  const { skillsFront, skillsBack, bdd } = myData[0];

  return (
    <div id="competences" className="competences">
      <div className="competences_content">
        <h1 className="competences_content-title"><a className="competences_content-title-lien" href="#home"> <img className="competences_content-title-img" src={accueil} alt="logo accueil" /></a> Compétences</h1>
        <p className="competences_intro">
          Je suis très polyvalent.
          Si je devais identifier trois compétences à mettre en avant,
          la première serait ma
          <span className="competences_intro-span"> Capacité à apprendre à me servir d'une technologie très vite.</span>
          La seconde serait ma
          <span className="competences_intro-span"> Passion pour l'Informatique</span> qui me fait
          constament repoussé mes limites pour en apprendre, en savoir plus,
          constamment à la recherche de nouveaux challenges, de nouvelles technologies à découvrir.
          La troisième serait ma
          <span className="competences_intro-span"> Joie de vivre</span>,
          j'aime le contacte humain et m'adapte très facilement à mes paires.
        </p>

        <h2 className="competences_transverses">Compétences transverses</h2>
        <p className="competences_transverses-content">
          Fort de mon expérience passé en tant que
          Responsable de Magasin dans plusieurs enseignes de
          distribution comme PICARD Surgelès ou encore NATURALIA, j'ai acquis rigueur,
          leaderShip, autonomie, esprit d'équipe, relation client, force de proposition,
          management, gestion du temps et valeurs du travail.
        </p>
        <p className="competences_transverses-content">
          Ces expériences mon également appris la relation client, à être à l'écoute du client,
          de bien saisir ces besoins et d'y répondre.
        </p>
        <span className="separator" />
        <h2 className="competences_techniques">Compétences Techniques</h2>
        <section>
          <h3 className="competences_list-title">Compétences Front-end :</h3>
          <ul className="competences_content-list">
            {skillsFront.map((item) => (
              <li
                key={item.id}
                className="competences_content-list--item"
              >
                {item.logo === '' ? <span className="span">{item.skillName}</span> : <img src={item.logo} alt="logo" />}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="competences_list-title"> Compétences Back-end :</h3>
          <ul className="competences_content-list">
            {skillsBack.map((item) => (
              <li
                key={item.id}
                className="competences_content-list--item"
              >
                {item.logo === '' ? <span className="span">{item.skillName}</span> : <img src={item.logo} alt="logo" />}
              </li>
            ))}
          </ul>
          <p className="competence_section-content">
            Développeur fullstack je suis capable de développé une application
            front avec html & css,
            js vanilla, utiliser des framework front tel que bootstrap, ou encore Tailwin.
          </p>
          <p className="competence_section-content">
            Et également en utilisant React en "single page application" avec l'utilisation
            de Redux pour gérer le state et Axios pour consommer une API
          </p>
          <p className="competence_section-content">
            Mais je suis également capable de développé tout le coté serveur (back-end)
            avec php soit en créant une API Rest ou encore en créant un MVC (Model view controler).
            Des connaissances également en Symfony et Laravel et initiation à NodeJs avec Express.
            Je suis capable de m'adapter, j'aime apprendre et découvrir.
          </p>
        </section>
        <section>
          <h3 className="competences_list-title"> Administration de bases de données :</h3>
          <ul className="competences_content-list">
            {bdd.map((item) => (
              <li
                key={item.id}
                className="competences_content-list--item"
              >
                {item.logo === '' ? <span className="span">{item.skillName}</span> : <img src={item.logo} alt="logo" />}
              </li>
            ))}
          </ul>
          <p>
            Pour les bases de données relationnelles,
            j'ai appris à travailler avec MySQL/MariaDB.
          </p>
          <p>
            De la modélisation à la réalisation de la base de données, rédiger des requêtes custom.
          </p>
        </section>
      </div>
      <div>
        annimation à venir !!
      </div>
    </div>
  );
}

export default Skills;
