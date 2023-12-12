import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './pages/Layout';
import { Banner } from './pages/Inicio';
import { Mision } from './pages/Mision';
import { Informacion } from './pages/Informacion';
import { Colegio } from './pages/Colegio';
import { Noticias } from './pages/Noticias';
import { Creditos } from './pages/Creditos';
import { Admisiones } from './pages/admisiones';
import { Circulares } from './pages/Circulares';
import { Direccion } from './pages/Direccion';
import { Contactos } from './pages/Contactos';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar/>}>
        <Route  path='/' element={<Banner/>}/>
        

        <Route  path='/mision' element={<Mision/>}/>
        <Route  path='/informacion' element={<Informacion/>}/>
        <Route  path='/colegio' element={<Colegio/>}/>
        <Route  path='/noticias' element={<Noticias/>}/>
        <Route  path='/admisiones' element={<Admisiones/>}/>
        <Route  path='/circulares' element={<Circulares/>}/>
        <Route  path='/direccion' element={<Direccion/>}/>
        <Route  path='/contactos' element={<Contactos/>}/>

        <Route  path='/creditos' element={<Creditos/>}/>
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
