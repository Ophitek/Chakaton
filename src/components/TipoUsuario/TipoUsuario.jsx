import React from 'react'
import "./tipoUsuario.css"

export default function tipoUsuario() {
  return (
    <>
      <div className="user-type-container">
        <div className="user-type-header">
          ¿Qué tipo de usuario eres?
        </div>
        <div className="user-type-cards">
          <div className="user-type-card">
            <img src="/assets/flaticonDonator.png" alt="Donator"  className='user-type-img'/>
            <h2>Donador</h2>
          </div>
          <div className="user-type-card">
            <img src="/assets/flaticonONG.png" alt="ONG"  className='user-type-img'/>
            <h2>ONG</h2>
          </div>
        </div>
      </div>
    </>
  )
}
