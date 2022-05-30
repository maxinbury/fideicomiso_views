import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Footer from './componentes/usuario1/Footer';
import Navbar from './componentes/usuario1/Navbar';
import Banner from './componentes/usuario1/Banner';
import Cards from './componentes/usuario1/Cards';
import Faq from './componentes/usuario1/Faq';
import ContenedorSingLogin from './contenedor/index';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <ContenedorSingLogin/>
      </BrowserRouter>
      
      
    </div>

  
  );
}

export default App;
