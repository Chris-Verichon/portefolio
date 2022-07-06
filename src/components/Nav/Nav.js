import { NavLink } from 'react-router-dom';
import facebook from 'src/assets/images/facebook.png';
import insta from 'src/assets/images/instagram.png';
import github from 'src/assets/images/github.png';
import linkedin from 'src/assets/images/linkedin.png';
import gmail from 'src/assets/images/gmail.png';
import './style.scss';

const Nav = () => (
  <nav className="navigation">
    <div className="navigation-author">
      Christophe Verichon
    </div>
    <ul className="navigation_list">
      <li className="navigation_list-item">
        <a href="https://www.facebook.com/christophe.verichon" target="_blanck">
          <img src={facebook} alt="logo" />
        </a>
      </li>
      <li className="navigation_list-item">
        <a href="https://www.instagram.com/chris_vrcn/" target="_blanck">
          <img src={insta} alt="logo" />
        </a>
      </li>
      <li className="navigation_list-item">
        <a className="navigation_list-item--link" href="https://github.com/Chris-Verichon" target="_blanck">
          <img src={github} alt="logo" />
        </a>
      </li>
      <li className="navigation_list-item">
        <a href="https://www.linkedin.com/in/chris-verichon-97628320a/" target="_blanck">
          <img src={linkedin} alt="logo" />
        </a>
      </li>
      <li className="navigation_list-item">
        <img className="navigation_list-item--img" src={gmail} alt="logo" />
        <span className="hover-img">chris.verichon@gmail.com</span>
      </li>
    </ul>
    <div>
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
          Compétences
        </NavLink>
        <NavLink
          className={({ isActive }) => (
            isActive ? 'navigation-item--active' : 'navigation-item'
          )}
          to="/Projets"
        >
          Projets
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Nav;
