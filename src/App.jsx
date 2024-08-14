import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
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
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App