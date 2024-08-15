import NavbarPrincipal from '../../components/NavbarPrincipal/NavbarPrincipal'
import QuienesSomos from '../../components/QuienesSomos/QuienesSomos'
import TipoUsuario from '../../components/TipoUsuario/TipoUsuario'
import React from 'react'
import "./principal.css"

export default function Principal() {
  return (
    <>
      <NavbarPrincipal/>
      <QuienesSomos/>
      <TipoUsuario/>
      {/** 
      <div className="principal">
        <div className="principal-header">
          <h1>Dashboard Administrador</h1>
        </div>
        <div className="principal-cards">
          <div className="card">
            <h2>ONG</h2>
            <p>Some information</p>
          </div>
          <div className="card">
            <h2>Datos</h2>
            <p>Some other information</p>
          </div>
          <div className="card">
            <h2>Card 3</h2>
            <p>Additional information</p>
          </div>
        </div>
        
      </div>
       */}
    </>
  )
}
