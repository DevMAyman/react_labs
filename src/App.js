import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero/index';
import AboutMe from './components/AboutMe/index';
import Skills from './components/Skills/index'
import Portfolio from './components/Portfolio/portfolio';
import Footer from './Footer/footer';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
function App() {
  return (
    <>
    <Hero/>
    <AboutMe/>
    <Skills/>
    <Portfolio/>
    <Footer/>
  </>
    );
}

export default App;
