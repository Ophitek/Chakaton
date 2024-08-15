import Login from './pages/Login/Login';
import RegisterONG from './pages/RegisterONG/RegisterONG';
import RegisterDonador from './pages/RegisterDonador/RegisterDonador';
import Principal from './pages/Principal/Principal';

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
        <Route exact path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterDonador />} />
        <Route path="/registerong" element={<RegisterONG />} />
      </Routes>
    </Router>
  )
}

export default App