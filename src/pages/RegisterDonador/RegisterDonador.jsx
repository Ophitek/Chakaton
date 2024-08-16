import React from 'react'
import "./registerDonador.css"
import NavbarPrincipal from '../../components/NavbarPrincipal/NavbarPrincipal'

export default function RegisterDonador() {
  return (
    <>
      <NavbarPrincipal />
      <div className="register-card-container">
        <div className="register-card">
          <div className="register-left">
            <img src="https://images.pexels.com/photos/6348119/pexels-photo-6348119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Login illustration" />
          </div>
          <div className="register-right">
          <h1>Haz la diferencia</h1>
            <input type="text" placeholder="Nombre" aria-label="Nombre" />
            <input type="text" placeholder="Apellidos" aria-label="Apellidos" />
            <input type="email" placeholder="Email" aria-label="Email" />
            <input type="password" placeholder="Contraseña" aria-label="Contraseña" />
            <div style={{ textAlign: 'center',}}>
            <Link to="/Donador"><button type="submit">Registrarse</button></Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
