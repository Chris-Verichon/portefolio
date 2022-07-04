// == Import
import { Route, Routes } from 'react-router-dom';

// == Import components
import Nav from 'src/components/Nav/Nav';
import Bio from 'src/components/Bio';
import HomeCanvas from '../HomeCanvas';
import HomeMobile from '../HomeMobile';
import Error404 from '../Error/Error404';

// == Import style
import './styles.scss';

function App() {
  return (
    <div id="app" className="app">
      <Routes>
        <Route path="/" element={<><Nav /><HomeCanvas /></>} />
        <Route path="/A-propos" element={<Bio />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* <HomeMobile /> */}
    </div>
  );
}

export default App;
