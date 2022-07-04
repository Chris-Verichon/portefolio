import './style.scss';
import accueil from 'src/assets/images/accueil.gif';
import { useSelector } from 'react-redux';

const Skills = () => {
  const { myData } = useSelector((state) => state.personnal);
  const { skillsFront, skillsBack } = myData[0];
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

        <h2 className="competences_transverses">Compétences transverses :</h2>
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
        <h2 className="competences_list-title">Skills Front-end :</h2>
        <ul className="competences_content-list">
          {skillsFront.map((item) => (
            <li
              key={item.id}
              className="competences_content-list--item"
            >
              {item.skillName}
            </li>
          ))}
        </ul>
        <h2 className="competences_list-title">Skills Back-end :</h2>
        <ul className="competences_content-list">
          {skillsBack.map((item) => (
            <li
              key={item.id}
              className="competences_content-list--item"
            >
              {item.skillName}
            </li>
          ))}
        </ul>
      </div>
      <div>
        annimation à venir !!
      </div>
    </div>
  );
}

export default Skills;
