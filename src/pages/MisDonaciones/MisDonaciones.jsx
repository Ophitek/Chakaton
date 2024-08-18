import React from 'react'
import "./misDonaciones.css"
import NavbarDonador from '../../components/NavbarDonador/NavbarDonador'
import DonacionRastreo from '../../components/DonacionRastreo/DonacionRastreo'

export default function MisDonaciones() {
  return (
    <div className='misDonaciones'>
      <NavbarDonador />
      <DonacionRastreo />
    </div>
  )
}
