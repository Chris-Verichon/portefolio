import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = () => (
  <nav className="navigation">
    <div className="navigation-author">
      Christophe Verichon
    </div>
    <label htmlFor="toggle" className="label"> ☰ </label>
    <input type="checkbox" id="toggle" />
    <div className="main_pages">
      <NavLink
        className={({ isActive }) => (
          isActive ? 'navigation-item--active' : 'navigation-item'
        )}
        to="/A-propos"
      >
        A-propos
      </NavLink>
      <NavLink
        className={({ isActive }) => (
          isActive ? 'navigation-item--active' : 'navigation-item'
        )}
        to="/Skills"
      >
        Skills
      </NavLink>
      <NavLink
        className={({ isActive }) => (
          isActive ? 'navigation-item--active' : 'navigation-item'
        )}
        to="/Projets"
      >
        Projets
      </NavLink>
      <NavLink
        className={({ isActive }) => (
          isActive ? 'navigation-item--active' : 'navigation-item'
        )}
        to="/CV"
      >
        CV
      </NavLink>
      <NavLink
        className={({ isActive }) => (
          isActive ? 'navigation-item--active' : 'navigation-item'
        )}
        to="/Contact"
      >
        Contact
      </NavLink>
    </div>
  </nav>
);

export default Nav;
