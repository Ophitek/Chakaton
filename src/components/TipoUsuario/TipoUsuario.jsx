import React from 'react'
import "./tipoUsuario.css"
import { useNavigate } from 'react-router-dom'

export default function tipoUsuario() {

  const navigate = useNavigate()

  function goRegisterDonador(){
    navigate("/registerdonador")
  }

  function goRegisterONG(){
    navigate("/registerong")
  }

  return (
    <>
      <div className="user-type-container">
        <div className="user-type-header">
          ¿Qué tipo de usuario eres?
        </div>
        <div className="user-type-cards">
          <div className="user-type-card" onClick={goRegisterDonador}>
            <img src="/assets/flaticonDonator.png"  alt="Donator"  className='user-type-img'/>
            <h2>Donador</h2>
          </div>
          <div className="user-type-card" onClick={goRegisterONG}>
            <img src="/assets/flaticonONG.png"  alt="ONG"  className='user-type-img'/>
            <h2>ONG</h2>
          </div>
        </div>
      </div>
    </>
  )
}
