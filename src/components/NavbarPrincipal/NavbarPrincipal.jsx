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
      <nav className="navbarP">
        <a className="navbarP-brand" href="#">
            <img src="/assets/ophitekLogoBW.png" onClick={goPrincipal} alt="Logo" className='navbar-ophitek-logo'/>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="navbarP-link" href="/">¿Quiénes somos?</a>
            </li>
            <li className="nav-item">
              <a className="navbarP-link" href="/">Nuestro proyecto</a>
            </li>
            <li className="nav-item">
              <a className="navbarP-link" href="/">Nuestro equipo</a>
            </li>
            <li className="nav-item">
              <a className="navbarP-link" onClick={goLogin}>Inicia Sesión</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
