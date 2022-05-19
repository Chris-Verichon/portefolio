import './style.scss';

const Nav = () => (
  <div className="image">
    <nav className="navigation">
      <label htmlFor="toggle" className="label">☰</label>
      <input type="checkbox" id="toggle" />
      <div className="main_pages">
        <a className="navigation-item" href="#bio"> Bio</a>
        <a className="navigation-item" href="#competences"> Compétences</a>
        <a className="navigation-item" href="/"> Parcours Pro</a>
        <a className="navigation-item" href="/"> Réalisations</a>
        <a className="navigation-item" href="/"> Contact</a>
      </div>
    </nav>
  </div>
);

export default Nav;
