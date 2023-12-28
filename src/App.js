import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home/index';
import About from './containers/about/index';
import Resume from './containers/resume/index';
import Skill from './containers/skills/index';
import Portfolio from './containers/portfolio/index';
import Contact from './containers/contact/index';
import Navbar from './components/nav';
import particles from './utils.js/particles';

function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (main)=> {
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {renderParticleJsInHomePage &&(
          <Particles id="particles" options={particles} init={handleInit} />
        )}

      <Navbar />

      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
