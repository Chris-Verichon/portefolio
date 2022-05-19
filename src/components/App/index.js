// == Import
import Bio from '../Bio';
import Competences from '../Competences';
import Header from '../Header';
import Nav from '../Nav';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Bio />
      <Competences />
    </div>
  );
}

// == Export App
export default App;
