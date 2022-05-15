import './style.scss';
import accueil from 'src/assets/images/accueil.gif';

function Competences() {
  return (
    <div id="competences" className="competences">
      <div className="competences_content">
        <h1 className="competences_content-title"><a className="competences_content-title-lien" href="#home"> <img className="competences_content-title-img" src={accueil} alt="logo accueil" /></a># Compétences</h1>
        <ul className="competences_content-list">
          <li className="competences_content-list--item">html 5</li>
          <li className="competences_content-list--item">CSS 3</li>
          <li className="competences_content-list--item">Javascript</li>
          <li className="competences_content-list--item">React</li>
          <li className="competences_content-list--item">Php</li>
          <li className="competences_content-list--item">Symfony</li>
          <li className="competences_content-list--item">Laravel</li>
          <li className="competences_content-list--item">Sql</li>
        </ul>
      </div>
      <div>
        annimation à venir !!
      </div>
    </div>
  );
}

export default Competences;
