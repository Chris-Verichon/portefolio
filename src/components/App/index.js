// == Import
import { Route, Routes } from 'react-router-dom';

// == Import components
import Nav from 'src/components/Nav/Nav';
import Bio from 'src/components/Bio';
import Skills from '../Skills';
import HomeCanvas from '../HomeCanvas';
// Import components
import HomeMobile from '../HomeMobile';
import Error404 from '../Error/Error404';
import Project from '../Project';

// == Import style
import './styles.scss';

function App() {
  return (
    <div id="app" className="app">
      <Routes>
        <Route path="/" element={<><Nav /><HomeCanvas /><HomeMobile /></>} />
        <Route path="/A-propos" element={<><Nav /><Bio /></>} />
        <Route path="/Skills" element={<><Nav /><Skills /></>} />
        <Route path="/Projets" element={<><Nav /><Project /></>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* <HomeMobile /> */}
    </div>
  );
}

export default App;
