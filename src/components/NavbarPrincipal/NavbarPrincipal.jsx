import React from 'react'
import "./navbarPrincipal.css"

export default function NavbarPrincipal() {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="#">
            <img src="/assets/LogoOphitek2.png" alt="Logo" width="160" height="80" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">¿Quiénes somos?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="section2">Nuestro proyecto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nuestro equipo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Inicia Sesión</a>
            </li>
          </ul>
          {/*
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Inicia Sesión</button>
          </form>
          */}
        </div>
      </nav>
    </div>
  )
}
