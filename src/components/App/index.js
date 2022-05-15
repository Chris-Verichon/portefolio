// == Import
import Bio from '../Bio';
import Competences from '../Competences';
import Header from '../Header';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Bio />
      <Competences />
    </div>
  );
}

// == Export
export default App;
