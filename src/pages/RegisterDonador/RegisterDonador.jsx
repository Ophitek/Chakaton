import React from 'react'
import "./registerDonador.css"
import { useNavigate } from "react-router-dom";
import NavbarPrincipal from '../../components/NavbarPrincipal/NavbarPrincipal'

export default function RegisterDonador() {

  const navigate=useNavigate()
  
  //Agregar el manejo de usuarios
  function handleRegister(){
    navigate("/login")
  }

  return (
    <>
    <NavbarPrincipal />
    <div className="registerONG-card-container">
      <div className="registerONG-card">
        <div className="registerONG-right">
        <h1>Haz la diferencia</h1>
            <input type="text" placeholder="Nombre" aria-label="Nombre" />
            <input type="text" placeholder="Apellidos" aria-label="Apellidos" />
            <input type="email" placeholder="Email" aria-label="Email" />
            <input type="password" placeholder="Contraseña" aria-label="Contraseña" />
            <button onClick={handleRegister}>Registrarse</button>
        </div>
        <div className="register-left">
        <img src="https://images.pexels.com/photos/6348119/pexels-photo-6348119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Login illustration" />
        </div>
      </div>
    </div>
    </>
  )
}
