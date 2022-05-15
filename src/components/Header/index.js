import './style.scss';
import accueil from './accueil.gif';

function Header() {
  return (
    <header className="header">
      <nav className="header_navigation">
        <a className="header_navigation-item" href="/"> Bio</a>
        <a className="header_navigation-item" href="/"> Compétences</a>
        <a className="header_navigation-item" href="/"> Parcours Pro</a>
        <a className="header_navigation-item" href="/"> Réalisations</a>
        <a className="header_navigation-item" href="/"> Contact</a>
      </nav>
      <a className="header_home" href="/"> <img className="header_home-img" src={accueil} alt="logo accueil" /></a>
      <div className="header_title">
        <h1 className="header_title-item">Développeur Web FullStack</h1>
      </div>
      <div className="header_title">
        <h2 className="header_title-subtitle">Christophe Verichon</h2>
      </div>
    </header>
  );
}

export default Header;
