import './style.scss';

const Nav = () => (
  <nav className="navigation">
    <div className="navigation-author">
      Christophe Verichon
    </div>
    <label htmlFor="toggle" className="label">☰</label>
    <input type="checkbox" id="toggle" />
    <div className="main_pages">
      <a className="navigation-item" href="#bio"> About</a>
      <a className="navigation-item" href="#competences"> Skills</a>
      <a className="navigation-item" href="/"> Parcours Pro / CV</a>
      <a className="navigation-item" href="/"> Réalisations</a>
      <a className="navigation-item" href="/"> Contact</a>
    </div>
  </nav>
);

export default Nav;
