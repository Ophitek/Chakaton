import React from 'react'
import "./mainDonador.css"
import Donacion from '../../components/Donacion/Donacion'
import NavbarDonador from '../../components/NavbarDonador/NavbarDonador'

export default function MainDonador() {  
  return (
    <div className='mainDonador'>
      <NavbarDonador/>
      <Donacion />
    </div>
  )
}
