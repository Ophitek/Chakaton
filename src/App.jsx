import Login from './pages/Login/Login';
import Perfil from "./pages/Perfil/Perfil";
import MainONG from './pages/MainONG/MainONG';
import Donacion from './pages/Donacion/Donacion';
import Principal from './pages/Principal/Principal';
import RegisterONG from './pages/RegisterONG/RegisterONG';
import MainDonador from './pages/MainDonador/MainDonador';
import MisDonaciones from './pages/MisDonaciones/MisDonaciones';
import RegisterDonador from './pages/RegisterDonador/RegisterDonador';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        {/* Rutas publicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route exact path="/" element={<Principal />} />
        <Route path="/registerong" element={<RegisterONG />} />
        <Route path="/registerdonador" element={<RegisterDonador />} />
        

        {/* Rutas donador */}
        <Route path="/donacion" element={<Donacion />} />
        <Route path="/donador" element={<MainDonador />} />
        <Route path="misdonaciones" element={<MisDonaciones />} />

        {/* Rutas donador */}
        <Route path="/ong" element={<MainONG />} />
        
      </Routes>
    </Router>
  )
}

export default App