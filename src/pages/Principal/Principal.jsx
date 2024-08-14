import NavbarPrincipal from '../../components/NavbarPrincipal/NavbarPrincipal'
import React from 'react'
import "./principal.css"

export default function Principal() {
  return (
    <>
      <NavbarPrincipal />
      <div className="parallax-image"></div>
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
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
        </div>
      </div>
    </>
  )
}
