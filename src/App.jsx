import Login from './pages/Login/Login';
import Donacion from './pages/Donacion/Donacion';
import Principal from './pages/Principal/Principal';
import RegisterONG from './pages/RegisterONG/RegisterONG';
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
        <Route exact path="/" element={<Principal />} />
        <Route path="/registerong" element={<RegisterONG />} />
        <Route path="/register" element={<RegisterDonador />} />
        

        {/* Rutas donador */}
        <Route path="/donacion" element={<Donacion />} />
      </Routes>
    </Router>
  )
}

export default App