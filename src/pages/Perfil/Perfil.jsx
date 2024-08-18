import React from 'react'
import NavbarDonador from '../../components/NavbarDonador/NavbarDonador'
import Donacion from '../../components/Donacion/Donacion'
import "./perfil.css"

export default function Perfil() {
  return (
    <>
      <NavbarDonador />
      <div className="perfil">
        <img
          src="https://images.pexels.com/photos/756758/pexels-photo-756758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Descripción de la imagen"
          className="perfil-imagen"
        />
        <h1 className="perfil-nombre">Nombre de la Organización</h1>
        <p className="perfil-descripcion">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <section className="perfil-objetivos">
          <div className="objetivo">
            <img src="https://via.placeholder.com/200" alt="Objetivos" className="objetivo-imagen" />
            <div className="objetivo-texto">
              <h2 className="objetivo-titulo">Objetivos</h2>
              <p className="objetivo-descripcion">Descripción breve del objetivo o logro.</p>
            </div>
          </div>
          <div className="objetivo">
            <img src="https://via.placeholder.com/200" alt="Logros" className="objetivo-imagen" />
            <div className="objetivo-texto">
              <h2 className="objetivo-titulo">Logros</h2>
              <p className="objetivo-descripcion">Descripción breve de los logros.</p>
            </div>
          </div>
        </section>

        <h1 className="perfil-nombre">¡Apóyanos hoy!</h1>
        {/*Agregar aqui las donaciones que esta organizacion ha creado */}
        <Donacion />
      </div>
    </>
  )
}
