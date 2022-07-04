// Import
import { Link } from 'react-router-dom';

// Import style
import 'src/components/Error/Error404/error404.scss';

const Error404 = () => (
  <div className="error404">
    <div className="error404_item">
      <span className="error404_item-1">4</span>
      <span className="error404_item-2">0</span>
      <span className="error404_item-3">4</span>
    </div>
    <p className="error404_content">
      Oups ! Tu as perdu ton chemin ?!
    </p>
    <p className="error404_content2">
      La page que tu essaie de regarder n'existe pas ...
    </p>
    <Link
      to="/"
      className="error404_link"
    >
      Retour à l'accueil
    </Link>
  </div>
);

export default Error404;
