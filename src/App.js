import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/Layout';
import { Banner } from './Components/Inicio';
import { Mision } from './Components/Mision';
import { Informacion } from './Components/Informacion';
import { Colegio } from './Components/Colegio';
import { Noticias } from './Components/Noticias';
import { Creditos } from './Components/Creditos';
import { Admisiones } from './Components/admisiones';
import { Circulares } from './Components/Circulares';
import { Direccion } from './Components/Direccion';
import { Contactos } from './Components/Contactos';
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
