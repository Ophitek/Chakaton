import React from 'react'
import "./navbarPrincipal.css"
import { useNavigate } from "react-router-dom";

export default function NavbarPrincipal() {

  const navigate = useNavigate();
  

  function goLogin(){
    navigate("/login")
  }

  function goPrincipal(){
    navigate("/")
  }
  
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="#">
            <img src="/assets/LogoOphitek2.png" onClick={goPrincipal} alt="Logo" width="160" height="80" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">¿Quiénes somos?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Nuestro proyecto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Nuestro equipo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={goLogin}>Inicia Sesión</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
