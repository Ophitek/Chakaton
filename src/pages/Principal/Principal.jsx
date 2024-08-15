import NavbarPrincipal from '../../components/NavbarPrincipal/NavbarPrincipal'
import QuienesSomos from '../../components/QuienesSomos/QuienesSomos'
import TipoUsuario from '../../components/TipoUsuario/TipoUsuario'
import React from 'react'
import "./principal.css"

export default function Principal() {
  return (
    <>
      <NavbarPrincipal/>
      <QuienesSomos/>
      <TipoUsuario/>
    </>
  )
}
