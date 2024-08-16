import React from 'react'
import "./registerONG.css"
import NavbarPrincipal from '../../components/NavbarPrincipal/NavbarPrincipal'

export default function RegisterONG() {
  return (
    <>
      <NavbarPrincipal />
      <div className="registerONG-card-container">
        <div className="registerONG-card">
          <div className="registerONG-left">
            <img src="https://images.pexels.com/photos/6646947/pexels-photo-6646947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Login illustration" />
          </div>
          <div className="register-right">
          <h1>Empieza el cambio</h1>
            <input type="text" placeholder="Organización" aria-label="Organización" />
            <input type="text" placeholder="No se que pedir" aria-label="Auida" />
            <input type="email" placeholder="Email" aria-label="Email" />
            <input type="password" placeholder="Contraseña" aria-label="Contraseña" />
            <button type="submit">Registrarse</button>
          </div>
        </div>
      </div>
    </>
  )
}
