// == Import
import Nav from 'src/components/Nav/Nav';
import Bio from 'src/components/Bio';
import HomeCanvas from '../HomeCanvas';
import HomeMobile from '../HomeMobile';

import './styles.scss';

function App() {
  return (
    <div id="app" className="app">
      <Nav />
      <HomeCanvas />
      <HomeMobile />
      <Bio />
    </div>
  );
}

export default App;
