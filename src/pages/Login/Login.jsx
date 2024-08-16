import React from 'react'
import "./login.css"
import { useNavigate } from "react-router-dom";
import NavbarPrincipal from '../../components/NavbarPrincipal/NavbarPrincipal'

export default function Login() {
  
  const navigate=useNavigate()
  
  function goRegister(){
    navigate("/")
  }

  return (
    <>
      <NavbarPrincipal />
      <div className="login-card-container">
        <div className="login-card">
          <div className="login-left">
            <h1>Iniciar sesión</h1>
            <input type="email" placeholder="Email" aria-label="Email" />
            <input type="password" placeholder="Contraseña" aria-label="Contraseña" />
            <a onClick={goRegister}>No tienes cuenta? Registrate ahora</a>
            <button type="submit">Inicia sesión</button>
          </div>
          <div className="login-right">
            <img src="https://images.pexels.com/photos/7345482/pexels-photo-7345482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Login illustration" />
          </div>
        </div>
      </div>
    </>
  )
}
