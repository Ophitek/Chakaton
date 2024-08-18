import React from 'react'
import "./misDonacionesONG.css"
import Donacion from '../../components/Donacion/Donacion'
import NavbarONG from '../../components/NavbarONG/NavbarONG'

export default function MisDonacionesONG() {
  return (
    <>
      <NavbarONG />
      <div className="misdonacionesong">
        <img
          src="https://images.pexels.com/photos/756758/pexels-photo-756758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Descripción de la imagen"
          className="misdonacionesong-imagen"
        />
        <h1 className="misdonacionesong-nombre">Tus donaciones</h1>
        {/*Se mostraran las donaciones hechas por la organizacion  */}
        <Donacion />
      </div>
    </>
  )
}
