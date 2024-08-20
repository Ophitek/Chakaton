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
            <div class="user-type-card-front">
              <img src="/assets/flaticonDonator.png"  alt="Donator"  className='user-type-img'/>
              <h2>Donador</h2>
            </div>
            <div class="user-type-card-back"> {/*<!Contenido del reverso de la tarjeta*/}
              <h2>Donador</h2>
              <p>Como donador puedes seleccionar entre un repertorio de ONGs para apoyarlas.</p>
            </div>
          </div>
          <div className="user-type-card" onClick={goRegisterONG}>
            <div class="user-type-card-front">
              <img src="/assets/flaticonONG.png"  alt="ONG"  className='user-type-img'/>
              <h2>ONG</h2>
            </div>
            <div class="user-type-card-back"> {/*<!Contenido del reverso de la tarjeta*/}
              <h2>ONG</h2>
              <p>Las ONG pueden registrarse para recibir donaciones</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
